import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactUs } from '../store/contactUs';

const ContactManager = () => {
    const dispatch = useDispatch();
    const { loading, error, message } = useSelector((state) => state.contactUs || {});

    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [localError, setLocalError] = useState(null);
    const [toast, setToast] = useState(null);

    useEffect(() => {
        if (message) {
            setToast({ type: 'success', text: message || 'Message sent.' });
            setForm({ name: '', email: '', subject: '', message: '' });
        }
        if (error) {
            setToast({ type: 'error', text: error });
        }
    }, [message, error]);

    useEffect(() => {
        if (!toast) return;
        const t = setTimeout(() => setToast(null), 3800);
        return () => clearTimeout(t);
    }, [toast]);

    const validate = () => {
        if (!form.name.trim()) return 'Name is required.';
        if (!form.email.trim()) return 'Email is required.';
        // simple email check
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Enter a valid email.';
        if (!form.message.trim()) return 'Message cannot be empty.';
        return null;
    };

    const handleChange = (e) => {
        setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v = validate();
        if (v) {
            setLocalError(v);
            setToast({ type: 'error', text: v });
            return;
        }
        setLocalError(null);
        try {
            await dispatch(contactUs(form)).unwrap();
        } catch (err) {
            // thunk already sets error in state; show fallback
            setToast({ type: 'error', text: err || 'Failed to send message.' });
        }
    };

    return (
        <section className="contact-manager animate-on-scroll">
            <div className="contact-header">
                <h1>Contact Messages</h1>
                <p className="muted">Use this form to submit a contact message to your backend (or test locally).</p>
            </div>

            <div className="contact-content">
                <form className="contact-form card resume-card" onSubmit={handleSubmit}>
                    <label>
                        Name
                        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                    </label>

                    <label>
                        Email
                        <input name="email" value={form.email} onChange={handleChange} placeholder="you@domain.com" />
                    </label>

                    <label>
                        Subject
                        <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject (optional)" />
                    </label>

                    <label>
                        Message
                        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message..." rows={6} />
                    </label>

                    <div className="form-actions">
                        <button type="submit" className="action-btn" disabled={loading}>
                            {loading ? 'Sending…' : 'Send Message'}
                        </button>
                    </div>

                    {localError && <div className="form-error">{localError}</div>}
                </form>

                <aside className="contact-info card stat-card">
                    <h3>Quick Info</h3>
                    <p className="muted">Messages submitted here will POST to <code>/auth/SignUp</code> per your store configuration. Adjust `VITE_API_URL` in your .env to change the target.</p>
                    <div className="meta">
                        <div><strong>Endpoint:</strong> <span className="file-badge">/auth/SignUp</span></div>
                        <div style={{marginTop: '0.5rem'}}><strong>Method:</strong> POST</div>
                    </div>
                </aside>
            </div>

            {toast && (
                <div className={`toast ${toast.type === 'success' ? 'show' : 'show'}`}>
                    {toast.text}
                </div>
            )}
        </section>
    );
};

export default ContactManager;
