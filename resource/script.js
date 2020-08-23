let url = "https://davids-restaurant.herokuapp.com/menu_items.json";

let JSONdata = null;
let cart_list = [];

$("document").ready(function(){
    $.get(url,function(jsonObj,success){            //HERE we fetch the JSON data from the web
        JSONdata = jsonObj.menu_items;
        console.log(JSONdata.length);
    });

    let itemNode = document.querySelector("#search");
    itemNode.addEventListener("keyup", createList);

    let addItemButton = document.querySelector("#cartbutton");
    addItemButton.addEventListener('click',addItem);

    function createList(e) {
        if (e.target.value.length >= 3 && JSONdata!=null) {
            let itemArray = [];
            for (const item in JSONdata) {
                let temp = JSONdata[item].name;
                let temp2 = JSONdata[item].name.toLowerCase();
                if ( temp.includes(e.target.value) || temp2.includes(e.target.value)  ) {
                    itemArray.push(item);
                }
            }

            if (itemArray.length > 0 ) {
                createListItem(itemArray);
            }
        }
    }

    function createListItem(itemList) {
        let itemListNode = document.querySelector("#itemList");
        itemListNode.innerHTML = "";

        //<label><input type='checkbox' value="12"/>XYZ</label>
        for (const itemIndex of itemList) {
            let itemObj = JSONdata[itemIndex];
            let li = document.createElement("li");
            let chkbox = document.createElement("input");
            chkbox.type = 'checkbox';
            chkbox.value = itemIndex;
            let label = document.createElement('label');
            label.appendChild(chkbox);
            label.appendChild(document.createTextNode(itemObj.name));
            //<li>name</li>
            li.appendChild(label);
            itemListNode.appendChild(li);
        }
    }

    function addItem() {
        let selectedItems = document.querySelectorAll("#itemList input:checked");
        for(const chkBoxNode of selectedItems) {
            cart_list.push(JSONdata[chkBoxNode.value]);
        }
        addFoodItem(cart_list);
    }

    function addFoodItem(selectedItems) {
        let i = 0, totPrice = 0;
        let myOrderListNode = document.querySelector("#cart_list");
        myOrderListNode.innerHTML = "";


        for (const item of selectedItems) {
            

            let div = document.createElement("div");
            div.className = "card col-sm-1 col-lg-3";
            // let tdSr = document.createElement("h1");
            // tdSr.textContent = ++i;
            // tr.appendChild(tdSr);
            var div2 = document.createElement("div")
            div2.id = item.id;
            div2.className = "card-body"
            var name = document.createElement("h5")
            var namenode = document.createTextNode(item.name);
            var info = document.createElement("p")
            info.className = "card-text"
            var infonode = document.createTextNode(item.description);
            var price_small = document.createElement("p")
            if(item.price_small == "null"){
                var price_small_node = document.createTextNode("Small serving not available")
            }
            else{
                var price_small_node = document.createTextNode("PRICE FOR SMALL SERVING: " + item.price_small)
            }
            var price_small_node = document.createTextNode("PRICE FOR SMALL SERVING: " + item.price_small)
            price_small.appendChild(price_small_node);
            var price_large = document.createElement("p")
            var price_large_node = document.createTextNode("PRICE FOR LARGE SERVING: " + item.price_large)
            price_large.appendChild(price_large_node);
            name.appendChild(namenode);
            info.appendChild(infonode);
            div2.appendChild(name)
            div2.appendChild(info)
            div2.appendChild(price_small)
            div2.appendChild(price_large)



            var img = document.createElement("img")
            img.className = "card-img-top"
            img.src  = "resource/food.jpeg"
            div.appendChild(img);

            div.appendChild(div2)




            // let tdPrice = document.createElement("td");
            // tdPrice.textContent = item.price_large;
            // totPrice += item.price_large;
            // tr.appendChild(tdPrice);

            // let tdAction = document.createElement("td");
            // let actButton = document.createElement("button");
            // actButton.setAttribute("class","buttonX");
            // actButton.setAttribute("id", "tr"+i);
            // actButton.addEventListener('click',deleteItem);
            // actButton.textContent = "X";
            // tdAction.appendChild(actButton);


            myOrderListNode.appendChild(div);
            // console.log();
        }


        // let trLastRow = document.createElement("tr");
        // let tdTotalLabel = document.createElement("td");
        // tdTotalLabel.setAttribute('colspan','2')
        // tdTotalLabel.textContent = `Total Price (${i} items)`;
        // trLastRow.appendChild(tdTotalLabel);

        // let tdTotalPrice = document.createElement("td");
        // tdTotalPrice.setAttribute('colspan','2')
        // tdTotalPrice.textContent = Math.round(totPrice);
        // trLastRow.appendChild(tdTotalPrice);

        // myOrderListNode.appendChild(trLastRow);

        // let itemListNode = document.querySelector("#itemList");
        // itemListNode.innerHTML = "";
    }

    function deleteItem(e) {
        let index = Number(e.target.id.replace("tr",""))-1;
        // console.log(index);
        buyItemList.splice(index,1);
        addFoodItem(buyItemList);
    }
    function test(){
        console.log("OK")
    }
    test()


});