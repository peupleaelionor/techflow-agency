import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contactez-nous</h1>
            <form>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
                <label htmlFor="phone">Téléphone (optionnel)</label>
                <input type="tel" id="phone" />
                <label htmlFor="projectType">Type de projet</label>
                <select id="projectType">
                    <option value="">Sélectionnez</option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                </select>
                <label htmlFor="budget">Budget estimé</label>
                <select id="budget" required>
                    <option value="<300">&lt; 300€</option>
                    <option value="300-1000">300–1 000€</option>
                    <option value="1000-3000">1 000–3 000€</option>
                    <option value="3000+">3 000€+</option>
                </select>
                <label htmlFor="message">Message</label>
                <textarea id="message" required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default Contact;