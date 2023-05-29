What will each line of the following code return? Don't run the code until after you have tried to answer.


- `(false && undefined);`
    - Returns `false`
- `(false || undefined);`
    - Returns `undefined`
- `((false && undefined) || (false || undefined));`
    - Returns `undefined`
- `((false || undefined) || (false && undefined));`
    - Returns `false`
- `((false && undefined) && (false || undefined));`
    - Returns `false`
- `((false || undefined) && (false && undefined));`
    - Returns `undefined`
- `('a' || (false && undefined) || '');`
    - Returns `'a'`
- `((false && undefined) || 'a' || '');`
    - Returns `'a'`
- `('a' && (false || undefined) && '');`
    - Returns `undefined`
- `((false || undefined) && 'a' && '');`
    - Returns `undefined`
