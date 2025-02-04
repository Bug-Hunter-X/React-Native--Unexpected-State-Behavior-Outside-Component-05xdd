# React Native: Unexpected State Behavior Outside Component

This repository demonstrates a common React Native bug involving unexpected state behavior when using a state variable outside a functional or class component. The `bug.js` file showcases the problematic code, while `bugSolution.js` provides the corrected version.

## Problem

When a state variable is accessed or modified within a function that's not directly part of a component's lifecycle, React's state management mechanisms won't be able to track changes properly.  This leads to inconsistencies and unpredictable behavior.  The error doesn't always throw an exception, which makes it difficult to debug.

## Solution

The solution involves moving the state logic completely inside a React component.  Properly using useState hook (for functional components) or this.setState (for class components) allows React to efficiently update the UI based on state changes.

## How to Run

1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npx react-native run-android` or `npx react-native run-ios` depending on your platform.