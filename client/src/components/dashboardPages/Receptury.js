import React from 'react';

const Receptury = () => {
    return (
        <div>
            <div>Receptury</div>
            <div>Zde si majitel z receptur sestaví jídlo.</div>
            <div>Příklad jak to bude fungovat:</div>
            <div>
                Smažený sýr s hranolkama: bude receptura na hranolky a receptura
                na smažený sýr(receptury se vytvoří vždy na 10porcí nebo na
                gramáž 1000g). S tím že když ho bude chtít vložit na denní menu
                tak se proklikne na denní menu kde nastaví Receptura smažený sýr
                150g + receptura hranolky 200g + tatarka 60g
            </div>
            <div>
                Další příklad s pizzou: bude mít recepturu na Margharitu (33cm)
                - těsto, mozzarela, rajský základ. Půjde do prodeje pizzy kde
                zadá 1x receptura margharita a když bude chtít udělat třeba
                Prosciutto kde je navíc šunka tak v recepturách skopíruje
                Margharitu a přídá tam šunku.
            </div>
        </div>
    );
};

export default Receptury;
