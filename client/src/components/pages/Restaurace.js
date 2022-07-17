import React from 'react';
import Navbar from '../navbar/Navbar';

const Restaurace = () => {
    return (
        <div>
            <Navbar />
            <div style={{ marginTop: '80px' }}></div>
            <h3>Restaurace</h3>
            <div>Horní lišta:</div>
            <ul>
                <li>otvírací doba</li>
                <li>aktuální čas</li>
                <li>telefon pro rozvoz</li>
                <li>login + info o uživateli</li>
            </ul>
            <div>Navbar</div>
            <ul>
                <li>
                    Jednotlivé sekce s jídli (minutky z kuřecí, denní menu,
                    skladaná pizza) to co si restaurace nastaví v dashboardu
                </li>
                <li>
                    Záložka s informacemi (kam se rozváží, udaje o
                    restauraci,...)
                </li>
            </ul>
            <div>Footer</div>
            <div>
                Rychlý náhled na informace, + reklama na poskytovatele softwaru
            </div>
        </div>
    );
};

export default Restaurace;
