'use client';
import React, { useState, useEffect } from 'react';

const TKLKeyboard: React.FC = () => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [initialPressedKeys, setInitialPressedKeys] = useState<Set<string>>(new Set());
  const [isBoxActive, setIsBoxActive] = useState<boolean>(false);

  const fRowLayout = [
    [{ key: 'F1' }, { key: 'F2' }, { key: 'F3' }, { key: 'F4' }],
    [{ key: 'F5' }, { key: 'F6' }, { key: 'F7' }, { key: 'F8' }],
    [{ key: 'F9' }, { key: 'F10' }, { key: 'F11' }, { key: 'F12' }],
  ];

  const threeHotkeys = [
    { key: 'PrintScreen', display: 'PrtSc' },
    { key: 'ScrollLock', display: 'ScrLk' },
    { key: 'Pause' }
  ];
  const navClusterLayout = [
    { key: 'Insert' }, { key: 'Home' }, { key: 'PageUp', display: 'PgUp' },
    { key: 'Delete', display: 'Del' }, { key: 'End' }, { key: 'PageDown', display: 'PgDn' }
  ];

  const mainLayout = [
    [
      { key: 'Backquote', display: '`' }, { key: 'Digit1', display: '1' }, { key: 'Digit2', display: '2' },
      { key: 'Digit3', display: '3' }, { key: 'Digit4', display: '4' }, { key: 'Digit5', display: '5' },
      { key: 'Digit6', display: '6' }, { key: 'Digit7', display: '7' }, { key: 'Digit8', display: '8' },
      { key: 'Digit9', display: '9' }, { key: 'Digit0', display: '0' }, { key: 'Minus', display: '-' },
      { key: 'Equal', display: '=' }, { key: 'Backspace', display: '⌫ ', className: 'w-20' },
    ],
    [
      { key: 'Tab', className: 'w-16' }, { key: 'KeyQ', display: 'Q' }, { key: 'KeyW', display: 'W' },
      { key: 'KeyE', display: 'E' }, { key: 'KeyR', display: 'R' }, { key: 'KeyT', display: 'T' },
      { key: 'KeyY', display: 'Y' }, { key: 'KeyU', display: 'U' }, { key: 'KeyI', display: 'I' },
      { key: 'KeyO', display: 'O' }, { key: 'KeyP', display: 'P' }, { key: 'BracketLeft', display: '[' },
      { key: 'BracketRight', display: ']' }, { key: 'Backslash', display: '\\', className: 'w-16' },
    ],
    [
      { key: 'CapsLock', display: 'Caps', className: 'w-20' }, { key: 'KeyA', display: 'A' },
      { key: 'KeyS', display: 'S' }, { key: 'KeyD', display: 'D' }, { key: 'KeyF', display: 'F' },
      { key: 'KeyG', display: 'G' }, { key: 'KeyH', display: 'H' }, { key: 'KeyJ', display: 'J' },
      { key: 'KeyK', display: 'K' }, { key: 'KeyL', display: 'L' }, { key: 'Semicolon', display: ';' },
      { key: 'Quote', display: "'" }, { key: 'Enter', className: 'w-24 grow' }
    ],
    [
      { key: 'ShiftLeft', display: 'Shift', className: 'w-24' }, { key: 'KeyZ', display: 'Z' },
      { key: 'KeyX', display: 'X' }, { key: 'KeyC', display: 'C' }, { key: 'KeyV', display: 'V' },
      { key: 'KeyB', display: 'B' }, { key: 'KeyN', display: 'N' }, { key: 'KeyM', display: 'M' },
      { key: 'Comma', display: ',' }, { key: 'Period', display: '.' }, { key: 'Slash', display: '/' },
      { key: 'ShiftRight', display: 'Shift', className: 'w-32 grow' },
    ],
    [
      { key: 'ControlLeft', display: 'Ctrl', className: 'w-16' },
      { key: 'MetaLeft', display: 'Win', className: 'w-16' },
      { key: 'AltLeft', display: 'Alt', className: 'w-16' },
      { key: 'Space', className: 'w-72' },
      { key: 'AltRight', display: 'Alt', className: 'w-16' },
      { key: 'MetaRight', display: 'Win', className: 'w-16' },
      { key: 'ControlRight', display: 'Ctrl', className: 'w-16' },
    ],
  ];

  const arrowLayout = [
    { key: 'ArrowUp', display: '↑' },
    { key: 'ArrowLeft', display: '←' },
    { key: 'ArrowDown', display: '↓' },
    { key: 'ArrowRight', display: '→' }
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isBoxActive) {
        event.preventDefault();
        setPressedKeys((prev) => new Set(prev).add(event.code));
        setInitialPressedKeys((prev) => {
          const newSet = new Set(prev);
          if (!newSet.has(event.code)) {
            newSet.add(event.code);
          }
          return newSet;
        });
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (isBoxActive) {
        event.preventDefault();
        setPressedKeys((prev) => {
          const newSet = new Set(prev);
          newSet.delete(event.code);
          return newSet;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isBoxActive]);

  const resetKeys = () => {
    setPressedKeys(new Set());
    setInitialPressedKeys(new Set());
  };

  const renderKey = (key: string, display?: string, className: string = 'w-12') => (
    <div
      key={key}
      className={`h-12 flex items-center justify-center rounded text-xs ${
        pressedKeys.has(key)
          ? 'bg-blue-500 text-white'
          : 'bg-gray-700 text-gray-300'
      } ${initialPressedKeys.has(key) ? 'border border-indigo-300' : ''} transition-colors duration-200 ${className}`}
    >
      {display || key}
    </div>
  );

  return (
    <>
    <div className="hidden md:flex flex-col items-center p-8">
    
      {/* Box to activate custom key handling */}
      <div className={` relative bg-gray-800 rounded-lg shadow-lg p-4 flex gap-4`}
      onClick={() => setIsBoxActive(!isBoxActive)}>
        <div className={`absolute flex flex-col items-center justify-center top-0 bottom-0 left-0 right-0 rounded-lg text-lg text-gray-200 backdrop-blur-md ${isBoxActive ? ' opacity-0' : ' opacity-100'} transition-opacity duration-200 `}>
        <p>Click Here to Start Testing</p>
        <p className='text-xs'>click again to stop</p>
        </div>
        

        {/* F row & Main */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            {renderKey('Escape', 'Esc')}

            <div className="f-row flex gap-6">
              {fRowLayout.map((row, index) => (
                <div key={index} className="flex gap-1">
                  {row.map((key) => renderKey(key.key))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <div className="grid gap-1">
              {mainLayout.map((row, index) => (
                <div key={index} className="flex gap-1">
                  {row.map((key) => renderKey(key.key, key.display!, key.className))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* hotkeys & aero */}
        <div className="hidden lg:flex flex-col gap-4">
          <div className="three hot keys col-span-1 flex gap-1">
            {threeHotkeys.map((key) => renderKey(key.key, key.display!))}
          </div>

          <div className="grid grid-cols-3 gap-1">
            {navClusterLayout.map((key) => renderKey(key.key, key.display!))}
          </div>

          <div className="grid grid-cols-3 gap-1 mt-10">
            <div className="col-start-2">{renderKey(arrowLayout[0].key, arrowLayout[0].display)}</div>
            <div className="col-span-3 flex gap-1">
              {arrowLayout.slice(1).map((key) => renderKey(key.key, key.display))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-2 gap-4">

      <button
        onClick={() => setIsBoxActive(!isBoxActive)}
        className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200"
        >
        {isBoxActive ? 'Stop' : 'Start'}
      </button>
      <button
        onClick={resetKeys}
        className="mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
        >
        Reset
      </button>
        </div>
    </div>


    <div className='block md:hidden text-lg text-white'>
        only works in large screen
    </div>
        </>
  );
};

export default TKLKeyboard;
