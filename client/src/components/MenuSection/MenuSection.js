import React from "react";
import API from "../../utils/API.js";
import "./MenuSection.css";
import Container from "../Container";
import MenuItem from "../MenuItem";
import ItemOptionsForm from "../ItemOptionsForm";

class MenuSection extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            menu: [],
            order: [],
            itemId: null,
            itemName: null,
            selectedOptions: []
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
    };

    // Method to get all menu items from database
    loadMenuItems = () => {
        API.getMenuItems()
        .then(res => {
            this.setState({menu: res.data});
            console.log("menu items: ", res.data);
        })
        .catch(err => console.log(err))
    };

    // Lifecycle method runs loadMenuItems when component mounts
    componentDidMount() {
        this.loadMenuItems()
    };

    //use callback to get categoryName, menuItemId, optionName from child form component
    handleOptionChange = (categoryName, menuItemId, optionName) => {

        // locate which option in which item is changed
        const cat = this.state.menu.find(cat => cat.categoryName === categoryName);
        const menuItem = cat.categoryItems.find(item => item.menuItemId === menuItemId);
        const option = menuItem.options.find(option => option.optionName === optionName)
        
        // toggle checked boolean value
        option.checked = !option.checked
        console.log(option.optionName + " checked: " + option.checked);

        // find index of the checked option in options array 
        // and splice in the new checked value
        const optionIndex = menuItem.options.indexOf(option);
        menuItem.options.splice(optionIndex, 1, option);

        if (option.checked === true) {
                // spread prevState to update nested property with checked value
                this.setState(prevState => ({
                    ...prevState,
                    selectedOptions: [
                        ...prevState.selectedOptions,
                        menuItem
                    ]
                }), () => console.log("items with selected options: ", this.state.selectedOptions));
            } else {
                const itemIndex = this.state.selectedOptions.indexOf(menuItem);
                console.log(itemIndex)
                if (itemIndex > -1) {
                    this.setState(prevState => ({
                        ...prevState,
                        selectedOptions: [
                            ...prevState.selectedOptions.splice(itemIndex, 1)
                        ]
                    }), () => console.log("items with selected options: ", this.state.selectedOptions));
                };
            };

        // this.setState(prevState => (
        //     {checked: !prevState.checked}
        //     ), () => {
        //         console.log("checked: ", this.state.checked);
        //     }
        // );

        // if (this.state.checked) {
        //     this.setState({[event.target.name]: event.target.checked});
        //     console.log("option checked: ", event.target.value);

        //     for (let i = 0; i < this.state.order.length; i++) {
        //         if (event.target.name === this.state.order[i].itemId) {
                
        //             this.state.order[i].options.push(event.target.value);
        //             console.log("chosen options: ", this.state.order[i].options);
        //         };
        //     };
        // };
    };

    // use callback function to get info from child button component
    addToOrder = (selectedItem) => {
        console.log("selected item ", selectedItem)
        
        for (let i = 0; i < this.state.selectedOptions.length; i++) {
            if (selectedItem.menuItemId === this.state.selectedOptions[i].menuItemId) {
                
                const options = this.state.selectedOptions[i].options
                .filter(option => option.checked);

                selectedItem.options.push(options);
            };
        };

        this.setState({order: this.state.order.concat(selectedItem)}, 
        () =>  console.log("order", this.state.order));
        
        // this.setState({
        //     itemId: menuItemId,
        //     itemName: itemName,
        // });

        // locate which option in which item is changed
        // const cat = this.state.menu.find(cat => cat.categoryName === categoryName);
        // console.log("cat ", cat)
        // const menuItem = cat.categoryItems.find(item => item.menuItemId === menuItemId);
        // const options = menuItem.options.filter(option => option.checked);

        // console.log("item to add: ", menuItem);

        // this.setState(prevState => ({
        //     ...prevState,
        //     order: [
        //         ...prevState.order,
        //         { 
        //             menuItem: menuItem,
        //             options: options
        //         }
        //     ]
        // }))

        //add item to order array
        // this.state.order.push({
        //     itemId: menuItemId,
        //     itemName: itemName,
        //     options: []
        // });
    };
      
    render() {        
        return (
            <div>
                {this.state.menu.map(MenuCategory => (
                    <Container key={MenuCategory._id}>
                        <div className="inner">
                            <h3>{MenuCategory.categoryName}</h3>

                            {MenuCategory.categoryItems.map((item, i) => (
                                <div key={i}>
                                    <MenuItem 
                                    menuItemId={item.menuItemId}
                                    itemName={item.itemName}
                                    itemNameVietnamese={item.itemNameVietnamese}
                                    description={item.description}
                                    categoryName={item.categoryName}
                                    price={item.price}
                                    image={item.image}
                                    callback={this.addToOrder}
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
                                                callback={this.handleOptionChange}
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
    };
};

export default MenuSection;