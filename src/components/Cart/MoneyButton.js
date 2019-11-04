import React from 'react'

export default function MoneyButton({amount}) {
    let MoneyButton = require('@moneybutton/react-money-button').default
    return (
        <div className = "ml-auto">
            <MoneyButton
            to="10906@moneybutton.com"
            amount= {amount}
            currency='USD'
            />
        </div>
    )
}
