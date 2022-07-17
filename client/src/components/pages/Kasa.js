import React from 'react';
import Navbar from '../navbar/Navbar';

const Kasa = () => {
    return (
        <div>
            <Navbar />
            <div style={{ marginTop: '80px' }}></div>
            <h3>Kasa</h3>
            <div>Na kase budou zaměstananci provádět tyto akce:</div>
            <ul>
                <li>1) přijímat objednávky</li>
                <li>2) vytvářet nové objednávky</li>
                <li>3) tisknout účtenky</li>
                <li>4) vyjíždět odvod denní tržby</li>
            </ul>
            <div>
                1. objednávka bude mít tyto parametry: jmeno, adresu, telefon,
                objednané jídlo + obaly
            </div>
            <div>
                2. objednávku bude moci zaměstnanec zadat i ručně (příjem z
                telefonu či objednávka přímo z baru)
            </div>
            <div>
                3. vytiskne se jedna účtenka pro hosta a jednu pro hosta s
                kompletní rekapitulací a všemi náležitostmi a jednu do kuchyně
                čistě s objednaným jídlem.{' '}
            </div>
            <div>
                4. na konci směny se udělá odvod tržby rozčleněnou na: karty |
                hotovost | paypal ....
            </div>

            <h3>Na obrazovce bude:</h3>
            <ul>
                <li>
                    {' '}
                    horní lišta se statusem zda je otevřeno, zavřeno, časem,
                    informacemi o tom kdo je přihlášen
                </li>
                <li>
                    v prostřední části budou vidět objednávky se statusem v jaké
                    jsou fázi
                </li>
                <li>
                    footer bude mít: přidat objednávku, příjmout objednávku,
                    tisk učtenky, tisk učtenky do kuchně, odvod tržby, logout
                </li>
            </ul>
            <div>
                Vytvoření nové objednávky po rozkliknutí bude mít obrazovka 2
                části 1 se zadáním údajů pro doručení. 2 sekce s jídli které po
                rozkliknutí nabídnou jednotlivé jídla.
            </div>
        </div>
    );
};

export default Kasa;
