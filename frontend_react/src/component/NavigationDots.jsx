import React from 'react';
//"über mich" zu "about", wenn du die Englische Version machst


const NavigationDots = ({active}) => {
    return (
        <div className="app__navigation">
            {['home', 'über mich', 'work', 'skills', 'testimonials', 'contact'].map((item,index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className = "app__navigation-dot"
                    style = {active === item ? {backgroundColor: '#313BAC'} : {}}
                    />
            ))}
        </div>
    )
}

export default NavigationDots;