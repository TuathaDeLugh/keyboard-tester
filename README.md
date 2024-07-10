# TKLKeyboard

A TKL keyboard Tester React applications.

<p align="center"><img src="https://umangsailor.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffir-con-8961c.appspot.com%2Fo%2Fimages%252FScreenshot%25202024-07-09%2520131322.png%3Falt%3Dmedia%26token%3D098e446c-2b9c-4256-9eab-31e36378947c&w=1200&q=75" alt="project-image"></p>

## Features

* Press multiple keys to test anti-ghosting
* Observe highlighted keys and borders
* F-keys and hotkeys are disabled during the test
* Supports keyboard events for key presses and releases
* Displays pressed keys in a highlighted state
* Includes a reset button to clear pressed keys
* Responsive design for large screens

## Usage

1. Import the component: `import TKLKeyboard from './TKLKeyboard';`
2. Use the component in your React application: `<TKLKeyboard />`


## State

* `pressedKeys`: a Set of currently pressed keys
* `initialPressedKeys`: a Set of initially pressed keys
* `isBoxActive`: a boolean indicating whether the keyboard is active

## Methods

* `resetKeys`: resets the pressed keys and initial pressed keys to an empty Set

## Keyboard Layout

The keyboard layout is defined using the following arrays:

* `fRowLayout`: defines the F-row keys
* `mainLayout`: defines the main keyboard layout
* `threeHotkeys`: defines the three hotkeys (PrintScreen, ScrollLock, and Pause)
* `navClusterLayout`: defines the navigation cluster keys
* `arrowLayout`: defines the arrow keys

Each key is defined as an object with the following properties:

* `key`: the key code (e.g. "F1", "Digit1", etc.)
* `display`: the display text for the key (optional)
* `className`: additional CSS classes for the key (optional)

## Customization

You can customize the keyboard layout by modifying the `fRowLayout`, `mainLayout`, `threeHotkeys`, `navClusterLayout`, and `arrowLayout` arrays.

## License

MIT License

## Author

[Tuathadelugh](https://github.com/tuathadelugh)