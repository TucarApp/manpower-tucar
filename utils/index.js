import classnames from "classnames";
import { MONTHS } from "../consts/index";

import { Fragment } from "react";

function $(amount, prefix = "$") {
  if (!amount || !parseFloat(amount)) return prefix + "0";
  const digits = parseFloat(amount)
    .toFixed(1)
    .replace(/\d(?=(\d{3})+\.)/g, "$&.");
  return prefix + digits.substr(0, digits.length - 2);
}

function $$(amount) {
  if (!amount || !parseFloat(amount)) +"0";
  const digits = parseFloat(amount)
    .toFixed(1)
    .replace(/\d(?=(\d{3})+\.)/g, "$&.");
  return digits.substr(0, digits.length - 2);
}

function $$$(amount) {
  if (!amount || !parseFloat(amount)) +"0";
  const digits = parseFloat(amount)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&.");
  return digits.substr(0, digits.length);
}
function $$$$(amount, prefix) {
  if (!amount || !parseFloat(amount));
  const digits = parseFloat(amount)
    .toFixed(1)
    .replace(/\d(?=(\d{3})+\.)/g, "$&.");
  return digits.substr(0, digits.length - 2);
}
function $$$$$(amount, prefix) {
  if (!amount || !parseFloat(amount));
  const digits = parseFloat(amount)
    .toFixed(1)
    .replace(/\d(?=(\d{3})+\.)/g);
  return digits.substr(0, digits.length - 2);
}



function repeat(Component, times = 2) {
  return [...Array(times).keys()].map((key) => (
    <Fragment key={key}>{Component}</Fragment>
  ));
}

function date() {
  const current = new Date();
  const date = `${current.getDate()} de ${
    MONTHS[current.getMonth()]
  } de ${current.getFullYear()}`;
  return date;
}

function roundTo(amount, decimals = 0) {
  const exp = Math.pow(10, decimals);
  return Math.round(amount * exp || 0) / exp;
}

function shuffle(array, times = 10) {
  for (let i = 0; i < times; i++) array = array.sort(() => 0.5 - Math.random());
  return array;
}

function transform(object = {}) {
  return (
    Object.keys(object)?.map((key) => ({
      key,
      ...object[key],
    })) || []
  );
}

export {
  $,
  $$,
  $$$,
  $$$$,
  $$$$$,
  classnames,
  repeat,
  roundTo,
  shuffle,
  transform,
  date,
};
