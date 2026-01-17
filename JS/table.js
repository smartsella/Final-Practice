const data = [
  {
    id: 1,
    city: "Chennai",
    model: "Dell Inspiron 3511",
    specs: "i5 / 8GB / 512GB",
    qty: 2,
    price: 54999,
  },
  {
    id: 2,
    city: "Bangalore",
    model: "HP Pavilion 15",
    specs: "i7 / 16GB / 512GB",
    qty: 1,
    price: 78499,
  },
  {
    id: 3,
    city: "Mumbai",
    model: "Lenovo IdeaPad 3",
    specs: "i3 / 8GB / 256GB",
    qty: 3,
    price: 38999,
  },
  {
    id: 4,
    city: "Chennai",
    model: "Asus Vivobook 14",
    specs: "Ryzen 5 / 8GB",
    qty: 1,
    price: 47999,
  },
  {
    id: 5,
    city: "Delhi",
    model: "Acer Aspire 7",
    specs: "Ryzen 5 / 16GB",
    qty: 2,
    price: 56499,
  },
  {
    id: 6,
    city: "Bangalore",
    model: "Dell Inspiron 3511",
    specs: "i5 / 8GB / 512GB",
    qty: 1,
    price: 54999,
  },
  {
    id: 7,
    city: "Mumbai",
    model: "HP Victus 16",
    specs: "i5 / 16GB / 512GB",
    qty: 1,
    price: 82999,
  },
  {
    id: 8,
    city: "Hyderabad",
    model: "Lenovo ThinkPad E14",
    specs: "i5 / 16GB / 512GB",
    qty: 2,
    price: 72999,
  },
  {
    id: 9,
    city: "Chennai",
    model: "Dell Inspiron 3511",
    specs: "i5 / 8GB / 512GB",
    qty: 1,
    price: 54999,
  },
  {
    id: 10,
    city: "Pune",
    model: "Asus TUF Gaming F15",
    specs: "i7 / 16GB / 1TB",
    qty: 1,
    price: 95499,
  },
  {
    id: 11,
    city: "Delhi",
    model: "HP Pavilion 15",
    specs: "i7 / 16GB / 512GB",
    qty: 1,
    price: 78499,
  },
  {
    id: 12,
    city: "Bangalore",
    model: "Lenovo IdeaPad 3",
    specs: "i3 / 8GB / 256GB",
    qty: 2,
    price: 38999,
  },
  {
    id: 13,
    city: "Mumbai",
    model: "Dell Vostro 3510",
    specs: "i5 / 8GB / 512GB",
    qty: 1,
    price: 58999,
  },
];

// //1
// const location = data.filter((item) => item.city === "Chennai");
// console.log(location);

// //2
// const highprice = data.filter((item) => item.price > 70000);
// console.log(highprice);

// //3
// const uniquecity = [...new Set(data.map((item) => item.city))];
// console.log(uniquecity);

// //4
// const modell = data.map((item) => item.model);
// console.log(modell);

// //5
// const highquetity = data.filter((item) => item.qty > 1);
// console.log(highquetity);

// //6
// const sorting = data.sort((a, b) => a.price - b.price);
// console.log(sorting);

// //7
// const sortingname = data.sort((a, b) => a.model.localeCompare(b.model));
// console.log(sortingname);

// //8
// const totalque = data.reduce((acc, cur) => acc + cur.qty, 0);
// console.log(totalque);

// //9
// const totalprice = data.reduce((acc, cur) => acc + cur.price, 0);
// console.log(totalprice);

//10
// const finding = data.find((item) => item.specs.includes("i5"));
// console.log(finding);

// //11
// const dellcount = data.filter((item) => item.model.includes("Dell"));
// console.log(dellcount);

// //12
// const group = data.reduce((acc, cur) => {
//   if (!acc[cur.city]) acc[cur.city] = [];
//   acc[cur.city].push(cur);
//   return acc;
// });
// console.log(group);

// //13
// const modelll = data.map((i) => ({ model: i.model, price: i.price }));
// console.log(modelll);

// //14
// const cost = data.some((i) => i.price > 90000);
// console.log(cost);

// //15
// const allabove = data.every((i) => i.price > 30000);
// console.log(allabove);

// //16
// const cheapest = data.reduce((min, item) =>
//   item.price < min.price ? item : min
// );

// console.log(cheapest);

// //17
// const expence = data.reduce((max, item) =>
//   item.price > max.price ? item : max
// );
// console.log(expence);

// //18
// const gst = data.map((item) => ({
//   ...item,
//   gstprice: Math.round(item.price * 1.18),
// }));
// console.log(gst);

// //19
// const asobj = data.reduce((acc, cur) => {
//   acc[cur.id] = cur;
//   return acc;
// }, {});
// console.log(asobj);

// //20
// const remove = data.filter((item) => item.qty > 1);
// console.log(remove);
