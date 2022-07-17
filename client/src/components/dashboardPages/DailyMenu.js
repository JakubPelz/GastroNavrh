import React from 'react';

const DailyMenu = () => {
    return (
        <div>
            <div>Denní menu</div>
            <ul>
                <li>
                    Možnost zadat menu na 2 týdny (aktuální týden + následující
                    týden)
                </li>
                <li>pondělí až neděle</li>
                <li>
                    tak aby tam byli tyto náležitosti{' '}
                    <a href="https://www.menicka.cz/praha-1.html?fto=true">
                        ZDE
                    </a>
                </li>
                <li>s se na danný den zadá vždy polevka/y</li>
                <li>počet denních menu 1 až x (dal bych strop max do 15)</li>
                <li>sestaví ho z receptur</li>
            </ul>
        </div>
    );
};

export default DailyMenu;
