import {useRef, useState} from 'react';

enum Operators {
  addition,
  substraction,
  division,
  multiplication,
}
export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPreviousNumber] = useState('0');
  const lastOperation = useRef<Operators>();
  const btnClean = () => {
    setNumber('0');
    setPreviousNumber('0');
  };
  const buildNumber = (numberText: string) => {
    // * just accept a single decimal point
    // eslint-disable-next-line curly
    if (number.includes('.') && numberText === '.') return;
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberText === '.') {
        setNumber(number + numberText);
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const btnDelete = () => {
    let negative = '';
    let tempNumber = number;
    if (tempNumber.includes('-')) {
      negative = '-';
      tempNumber = number.substring(1);
    }
    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const changeNumberToPrevious = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const btnDivision = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.division;
  };
  const btnMultiplication = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.multiplication;
  };
  const btnSubstraction = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.substraction;
  };
  const btnAddition = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.addition;
  };

  const calcutate = () => {
    // eslint-disable-next-line curly
    if (prevNumber === '0') return;
    const firstValue = Number(number);
    const secondValue = Number(prevNumber);
    switch (lastOperation.current) {
      case Operators.division:
        setNumber(String(secondValue / firstValue));
        break;
      case Operators.multiplication:
        setNumber(String(firstValue * secondValue));
        break;
      case Operators.substraction:
        setNumber(String(secondValue - firstValue));
        break;
      case Operators.addition:
        setNumber(String(firstValue + secondValue));
        break;

      default:
        break;
    }
    setPreviousNumber('0');
  };
  return {
    btnClean,
    buildNumber,
    btnDelete,
    positiveNegative,
    btnDivision,
    btnMultiplication,
    btnSubstraction,
    btnAddition,
    calcutate,
    number,
    prevNumber,
  };
};
