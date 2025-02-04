```javascript
// bugSolution.js
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
};

export default MyComponent;
```