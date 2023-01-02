import React,{useState} from React;


export default function CreateOrderPageSummary(props){
    const [storeNo, setStoreNo] = useState("")
    const [storeAddress, setStoreAddress] = useState("")
    const [disabled, setDisabled] = useState(true)

    return (
        <div className="popup-box">
            <div className="summary-box" style={{overflow : "scroll"}}>
                <div className="summary-header">
                    Summary
                    <button className="close-summary" onClick={handleSummaryClose}>X</button>
                </div>
            </div>

            <div className="summary-store-info">
                <div className="store-detail">
                    <form className="store-form">
                        <select onChange={handleForm} defaultValue="Store Location">
                            <option disabled>store Location</option>
                            <option>JP Nagar</option>
                        </select>
                    </form>
                </div>
                <div className="store-detail">
                    <h4><strong>Store Address</strong></h4>
                    <p>{storeAddress}</p>
                </div>
                <div className="store-detail">
                    <h4><strong>Store Number</strong></h4>
                    <p>{storeNo}</p>
                </div>
            </div>

            <div className="order-summary">
                <h4>Order details</h4>
                <table className="order-summary-table">
                    <tbody>
                        {props.order.products.map((product,index)=>{
                            return (
                                <tr key={index}>
                                    <td className="prod-type">
                                        {product.productType}
                                    </td>
                                    <td className="prod-washtype">
                                        {/* {washtype(index)} */}
                                    </td>
                                    <td className="price-calc">
                                        {/* {product.quantity} x {washPrice[index]} */}
                                    </td>
                                    <td className="prod-price">
                                        {/* {Price[index]} */}
                                    </td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td></td>
                            <td>Sub total:</td>
                            <td style={{fontWeight : "bold"}}>props.order.totalPrice</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
