import React from 'react';
import {Text, View} from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import {style} from '../theme/appTheme';
import {useCalculator} from '../../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    prevNumber,
    number,
    btnClean,
    positiveNegative,
    btnDelete,
    buildNumber,
    btnDivision,
    btnMultiplication,
    btnSubstraction,
    btnAddition,
    calcutate,
  } = useCalculator();
  return (
    <View style={style.calculatorContainer}>
      {prevNumber !== '0' && <Text style={style.resultSm}> {prevNumber} </Text>}
      <Text style={style.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      {/*Buttons row*/}
      <View style={style.row}>
        <ButtonCalc text="C" color="#9b9b9b" action={btnClean} />
        <ButtonCalc text="+/-" color="#9b9b9b" action={positiveNegative} />
        <ButtonCalc text="del" color="#9b9b9b" action={btnDelete} />
        <ButtonCalc text="/" color="#ff9427" action={btnDivision} />
      </View>
      {/*Buttons row*/}
      <View style={style.row}>
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" color="#ff9427" action={btnMultiplication} />
      </View>
      {/*Buttons row*/}
      <View style={style.row}>
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" color="#ff9427" action={btnSubstraction} />
      </View>
      {/*Buttons row*/}
      <View style={style.row}>
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="#ff9427" action={btnAddition} />
      </View>
      {/*Buttons row*/}
      <View style={style.row}>
        <ButtonCalc text="0" widen action={buildNumber} />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#ff9427" action={calcutate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
