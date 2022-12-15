import { useState, useContext } from "react";
import axios from 'axios';
import "./MenuSection.css";
import Container from "../Container";
import MenuItem from "../MenuItem";
import ItemOptionsForm from "../ItemOptionsForm";
import TrashButton from "../TrashButton";
import { MenuContext } from "../../ctx/menuContext.js";

const defaultContactInfo = {
  name: "",
  phone: "",
  email: "",
  pickupTime: "",
  specialRequests: "",
}

const MenuSection = () => {
  const { menu, categories } = useContext(MenuContext)
  const [order, setOrder] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])
  const [contactInfo, setContactInfo] = useState(defaultContactInfo)

  const handleOptionChange = (menuItemId, optionName, checked) => {
    const menuItem = menu?.find(item => item.menuItemId === menuItemId);
    const option = menuItem?.options?.find(option => option.optionName === optionName);
    let updatedOptions = menuItem?.options

    // find index of the checked option in options array 
    // and splice in the new checked value
    const optionIndex = menuItem?.options?.indexOf(option);
    
    // toggle checked boolean value
    // for radio buttons loop through options & set all except current selected to false
    if (option?.optionType === "radio") {
      updatedOptions = menuItem.options.map((opt, i) => {
        return i === optionIndex ? {
          ...opt,
          checked: checked
        } : {
          ...opt,
          checked: false
        }
      })
    } else {
      // for checkboxes
      updatedOptions = menuItem.options.map((opt, i) => {
        return i === optionIndex ? {
          ...opt,
          checked: checked
        } : {
          ...opt,
        }
      })
    }

    menuItem.options = updatedOptions;

    if (checked && !selectedOptions.includes(menuItem)) {
      // if menuItem not already included in selectedOptions array
      // spread state to add menuItem with new checked value
      setSelectedOptions([
        ...selectedOptions,
        menuItem
      ])
    } 
    else if (!checked && selectedOptions.includes(menuItem)) {        
      // if menuItem is already included in selectedOptions array replace it with updated version
      setSelectedOptions(
        selectedOptions
          .filter(item => item.menuItemId !== menuItemId)
          .concat(menuItem)
      );
    };
  }

  // use callback function to get info from child button component
  const addToOrder = (selectedItem) => {

    // add any selected options from selectedOptions array to selectedItem.options
    selectedOptions.forEach((opt, i) => {
      if (selectedItem.menuItemId === selectedOptions[i].menuItemId) {
        const options = opt.options
          .filter(opt => opt.checked)
        selectedItem.options = [...selectedItem.options, ...options]
      }
    })
    // update order state with new selectedItem
    setOrder([
      ...order, 
      selectedItem
    ])

    /* remove selected item from selectedOptions array 
    in case another of that same menu item is added to order
    with different options from the first one.  */

    for (let i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i].menuItemId === selectedItem.menuItemId) {
        setSelectedOptions(selectedOptions.filter(arr => arr !== selectedOptions[i]))
      };
    };
  };

  const getOrderPrices = () => {
    let orderPrices = [];
    order?.forEach(item => {
      if (item?.options?.length > 0) {
        const optionPrices = item.options.map(opt => opt.optionPrice)
        const optionsTotal = optionPrices.reduce((total, num) => (total + num), 0)
        const itemSubtotal = (optionsTotal + item.price) * item.quantity
        orderPrices.push(itemSubtotal)
      } else {
        const itemSubtotal = item.price * item.quantity
        orderPrices.push(itemSubtotal)
      }
    })
    return orderPrices
  }

  const calculateSubtotal = () => {
    const orderPrices = getOrderPrices()
    const subtotal = orderPrices.reduce((total, num) => {
      return total + num
    }, 0).toFixed(2)
    return subtotal
  }

  const calculateTax = () => {
    const subtotal = calculateSubtotal()
    const tax = (parseFloat(subtotal) * 0.06).toFixed(2)
    return tax
  }

  const calculateTotal = () => {
    const subtotal = calculateSubtotal()
    const tax = calculateTax()
    const total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2)
    return total
  }

  const handleItemTrashClick = index => {
    console.log("trash icon index clicked: ", index);
    const updatedOrder = order.slice(0, index).concat(order.slice(index + 1, order.length));
    setOrder(updatedOrder);
  };

  const handleOptionTrashClick = (index, i) => {
    const item = order[index];
    const updatedOptions = item.options.slice(0, i).concat(item.options.slice(i + 1, item.options.length));
    const updatedItem = {
        ...item,
        options: [
            ...updatedOptions
        ]
    }
    const updatedOrder = order.slice(0, index).concat(updatedItem, order.slice(index + 1, order.length));
    setOrder(updatedOrder);
  };

  const handleQuantityChange = (index, value) => {
    const updatedOrder = order.map((item, i) => (
      i === index ? {...item, quantity: value} : item
    ))
    setOrder(updatedOrder);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContactInfo({
      ...contactInfo,
      [name]: value
    })
  };

  const resetOrderForm = () => {
    document.getElementById('order-form').reset();
    setOrder([])
    setSelectedOptions([])
    setContactInfo(defaultContactInfo)
  }

  // this is set up to work with Nodemailer on backend. 
  // Currently disabled because we don't have an email address to send to
  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios({
        method: 'POST',
        url: "/api/sendorder",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        data: {
          name: contactInfo.name,
          phone: contactInfo.phone,
          email: contactInfo.email,
          pickupTime: contactInfo.pickupTime,
          orderDetails: document.getElementById('orderDetails').innerHTML,
          specialRequests: contactInfo.specialRequests,
          orderSubtotal: `$${calculateSubtotal()}`,
          tax: `$${calculateTax()}`,
          total: `$${calculateTotal()}`
        }
      })
      console.log(response)
      if (response?.data?.msg === "success") {
        alert('Thank you for your order. We will contact you if we have any questions.')
        resetOrderForm()
      } else if (response.data.msg === 'fail') {
        alert("We're sorry! Your order didn't go through. Please call 414-828-9698.");
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <p className="centered margin-bottom">For carry-out call <a href="tel:4148289698">414-828-9698</a>. Pay at the restaurant when you pick up your order.</p>
      <p className="centered">
        {order.length > 0 ?                     
        <button className="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            View your selections
        </button>
        : null}
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <ul>
            {order.map((item, index) => (
              <li key={index}>
                <h6>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="quantity">Qty</label>
                    <input className="form-control form-control-sm quantity" name="quantity"  
                      type="number" min="1" defaultValue="1" 
                      onChange={event => handleQuantityChange(index, parseInt(event.target.value))} 
                    />
                  </div>

                  {item.menuItemId}. {item.itemName} 
                  {item.price ? 
                  <span className="price">
                    ${(item.price * item.quantity).toFixed(2)}
                    <TrashButton
                      onClick={() => handleItemTrashClick(index)}
                      index={index}
                    /> 
                  </span> 
                    : 
                  <span className="price">
                    "Market price (not included in total)"
                    <TrashButton
                      onClick={() => handleItemTrashClick(index)}
                      index={index}
                    />
                  </span>}
                </h6>
                <ul>
                  {item.options.map((option, i) => (
                    <li className="order-option" key={i}>
                      {option.optionName} {option.optionPrice ? 
                      <span className="price">${(option.optionPrice * item.quantity).toFixed(2)}
                        <TrashButton
                          onClick={() => handleOptionTrashClick(index, i)}
                        />
                      </span> : null}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <hr />
          <p id="subtotal">Subtotal: <span className="price">${calculateSubtotal()}</span></p>
          <p id="tax">Tax: <span className="price">${calculateTax()}</span></p>
          <p id="total">Total: <span className="price">${calculateTotal()}</span></p>
          <hr />
          <div id="orderDetails">
            {order.map((item, index) => (
              <div key={index}>Quantity ({item.quantity}): {item.menuItemId}. {item.itemName} ${item.price * item.quantity}
                {item.options.length > 0 ? 
                <ul>
                  {item.options.map((option, i) => (
                    <li key={i}>{option.optionName} ${option.optionPrice * item.quantity}</li>
                  ))}
                </ul>
                : null
                }
              </div>
            ))}
          </div>

          {/* <h5>Your Contact Info</h5>
          <form id="order-form" onSubmit={handleOrderSubmit} method="POST">
            <div className="form-group row">
              <label htmlFor="name" className="col-sm-2 col-form-label col-form-label-sm">Name</label>
              <div className="col-sm-4">
                <input type="text" className="form-control form-control-sm" id="name" name="name" placeholder="Name" onChange={handleInputChange} />
              </div>
              <label htmlFor="phone" className="col-sm-2 col-form-label col-form-label-sm">Phone</label>
              <div className="col-sm-4">
                <input type="tel" className="form-control form-control-sm" id="phone" name="phone" placeholder="Format: 123-456-7890" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  onChange={handleInputChange} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="email" className="col-sm-2 col-form-label col-form-label-sm">Email (required)</label>
              <div className="col-sm-4">
                <input type="email" className="form-control form-control-sm" id="email" name="email" placeholder="Email" required onChange={handleInputChange} />
              </div>
              <label htmlFor="pickuptime" className="col-sm-2 col-form-label col-form-label-sm">Pick-up time</label>
              <div className="col-sm-4">
                <input type="time" className="form-control form-control-sm" id="pickuptime" name="pickuptime" placeholder="Order pick-up time" onChange={handleInputChange} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="name" className="col-sm-2 col-form-label col-form-label-sm">Any special requests</label>
              <div className="col-sm-10">
                <textarea className="form-control form-control-sm" id="specialrequests" name="specialrequests" rows="3" placeholder="Any special requests" onChange={handleInputChange}></textarea>
              </div>
            </div>
            <div className="centered">
              <button className="btn btn-secondary btn-sm" type="submit" onClick={handleOrderSubmit}>Submit</button>
            </div>
          </form> */}
          <div className="centered">
            <p>We're sorry! Online ordering is currently unavailable.</p>
            <a className="btn btn-secondary btn-sm" href="tel:+14148289698" style={{float: "none"}}>Call now to place this order!</a>
          </div>

        </div>
      </div>
      {categories?.map(MenuCategory => (
        <Container key={MenuCategory._id}>
          <div className="inner">
            <h3>{MenuCategory.categoryName}</h3>

            {menu?.filter(item => item.categoryName === MenuCategory.categoryName) 
            .map((item, i) => (
              <div key={i}>
                <MenuItem 
                  item={item}
                  callback={addToOrder}
                />

                {item.options.length > 0 ?
                <div className="row">
                  <div className="col-md-12">
                    <p><strong>Options:</strong></p>
                    {item.options.map((option, index) => (
                      <ItemOptionsForm
                        key={index}
                        menuItemId={item.menuItemId}
                        categoryName={item.categoryName}
                        optionType={option.optionType}
                        optionName={option.optionName}
                        optionPrice={option.optionPrice}
                        checked={option.checked}
                        callback={handleOptionChange}
                      />
                    ))}
                  </div>
                </div> : null
                }
              </div>
            ))}
          </div>
        </Container>
      ))}
    </div>
  )
}

export default MenuSection;