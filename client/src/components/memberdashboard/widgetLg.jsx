import '../css/component/widgetLg.css'

function widgetLg () {
    const Button = ({type})=> {
        return <button className={"widgetLgbutton"+ type}>{type}</button>
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Lastest Expenditure</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className='widgetLgTh'>Title</th>
                    <th className='widgetLgTh'>Date</th>
                    <th className='widgetLgTh'>Amount</th>
                    <th className='widgetLgTh'>Status</th>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src='https://images.gr-assets.com/authors/1561336084p8/4123863.jpg'
                        alt=''
                        className='widgetLgImg' 
                    />
                    <span className='widgetLgName'>Fredrick Alonso</span>
                    </td>
                    <td className='widgetLgDate'>13th January 2023</td>
                    <td className='widgetLgAmount'>£120.00</td>
                    <td className='widgetLgStatus'>
                        <button type='Approved'/>
                    </td>
                    </tr>
                    <tr className='widgetLgTr'>
                        <td className='widgetLgUser'>
                            <img src='https://media-exp1.licdn.com/dms/image/C4D03AQFsohsj7miS2w/profile-displayphoto-shrink_800_800/0/1651377283409?e=1657756800&v=beta&t=rHN6C2GAljYKMZKQkAhR5DZyXfGtPv2r3PCo0Zqw7aU'
                            alt=''
                            className='widgetLgImg'
                            />
                        <span className='widgetLgName'>Maria Dubois</span>
                        </td>
                        <td className='widgetLgDate'>24th January 2023</td>
                        <td className='widgetLgAmount'>£40.00</td>
                        <td className='widgetLgStatus'>
                            <button type='Declined'/>
                        </td>
                    </tr>
                    <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src='https://images.gr-assets.com/authors/1561336084p8/4123863.jpg'
                        alt=''
                        className='widgetLgImg' 
                    />
                    <span className='widgetLgName'>Adam Day</span>
                    </td>
                    <td className='widgetLgDate'>2nd Feburary 2023</td>
                    <td className='widgetLgAmount'>£420.00</td>
                    <td className='widgetLgStatus'>
                        <button type='Approved'/>
                    </td>
                    </tr>
            </table>
        </div>
    )
}