The invoiceTotal function in the code below computes the total amount for an invoice containing four "line items". How can you refactor the function so that it will work with invoices containing any number of line items?

```js
function invoiceTotal(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?
```

<br>
<br>
<br>

Since we want to use any number of inputs we can either use rest parameters or the `arguments` object. Since the easiest is to use a rest parameter, let's do that:

```js
function invoiceTotal(...amounts) {
  return amounts.reduce((sum, value) => sum + value);
}
```
