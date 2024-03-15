/* eslint-disable no-useless-escape */
import { AES, enc } from 'crypto-js'

const cryptKey = '1nf4rm4'

export function encrypt(o, isJson) {
  if (isJson) {
    return AES.encrypt(JSON.stringify(o), cryptKey).toString()
  } else {
    return AES.encrypt(o, cryptKey).toString()
  }
}

export const formatMoeda = (delta) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(delta))
}

export function decrypt(o, isJson) {
  if (isJson) {
    const bytes = AES.decrypt(o, cryptKey)
    return JSON.parse(bytes.toString(enc.Utf8))
  } else {
    const bytes = AES.decrypt(o, cryptKey)
    return bytes.toString(enc.Utf8)
  }
}

export function formatCnpjCpf(value) {
  value = removeAcentosEspacosCaracteres(value)
  const cnpjCpf = value.replace(/\D/g, '')

  if (cnpjCpf.length === 11) {
    return cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
  }

  return cnpjCpf.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
    '$1.$2.$3/$4-$5',
  )
}

export function validaCpf(strCPF) {
  let soma = 0
  let resto = 0

  if (strCPF === '00000000000') {
    return false
  }

  // VERIFICANDO PRIMEIRO DIGITO
  for (let i = 1; i <= 9; i++) {
    soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i)
  }
  resto = (soma * 10) % 11

  if (resto === 10 || resto === 11) {
    resto = 0
  }
  if (resto !== +parseInt(strCPF.substring(9, 10))) {
    return false
  }

  // VERIFICANDO SEGUNDO DIGITO
  soma = 0
  for (let i = 1; i <= 10; i++) {
    soma = soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)
  }
  resto = (soma * 10) % 11

  if (resto === 10 || resto === 11) {
    resto = 0
  }
  if (resto !== parseInt(strCPF.substring(10, 11))) {
    return false
  }
  return true
}

export function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}


export function removeAcentosEspacosCaracteres(str) {
  return str != null
    ? str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/([^\w]+|\s+)/g, '') // Substitui espaço e outros caracteres por hífen
      .replace(/\-\-+/g, '') // Substitui multiplos hífens por um único hífen
      .replace(/(^-+|-+$)/, '')
    : '' // Remove hífens extras do final ou do inicio da string
}

export function searchByAllKeys(array, searchWord) {
  const fil = array.filter((i) => {
    const rows = JSON.stringify(Object.values(i))
    return rows
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .includes(
        searchWord.current.value
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, ''),
      )
  })
  return fil
}

export function sortByProperty(property, asc) {
  return function (x, y) {
    if (asc) {
      return x[property] === y[property]
        ? 0
        : x[property] > y[property]
          ? 1
          : -1
    } else {
      return x[property] === y[property]
        ? 0
        : x[property] < y[property]
          ? 1
          : -1
    }
  }
}

export function makeRandomColor() {
  let c = ''
  while (c.length < 7) {
    c += Math.random().toString(16).substr(-6).substr(-1)
  }
  return '#' + c
}

function hexToRgb(hex) {
  const result = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => '#' + r + r + g + g + b + b,
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16))
  const rgb = 'rgb(' + result[0] + ',' + result[1] + ',' + result[2] + ')'
  return rgb
}

export function formatTypeMoviment(value) {
  if (value === 'SALE') {
    return 'VENDA'
  } else if (value === 'DEVOLUTION') {
    return 'DEVOLUÇÃO'
  } else if (value === 'CASHOUT') {
    return 'CASHOUT'
  } else {
    return ''
  }
}

export function formatInstituition(value) {
  if (value === 1) {
    return 'MATERA'
  } else if (value === 2) {
    return 'SHIPAY'
  } else if (value === 3) {
    return 'BB'
  }
}

export function makeRandomColorRGB() {
  let c = ''
  while (c.length < 7) {
    c += Math.random().toString(16).substr(-6).substr(-1)
  }
  const hex = '#' + c

  return hexToRgb(hex)
}

export function dateDifference(date1, date2) {
  const diffInMilliseconds = Math.abs(date2 - date1);
  const diffInSeconds = diffInMilliseconds / 1000;
  const diffInMinutes = diffInSeconds / 60;
  const diffInHours = diffInMinutes / 60;
  const diffInDays = diffInHours / 24;
  const diffInMonths = diffInDays / 30.436875;
  const diffInYears = diffInMonths / 12;
  return {
    diffInMilliseconds,
    diffInSeconds,
    diffInMinutes,
    diffInHours,
    diffInDays,
    diffInMonths,
    diffInYears
  };
}

export function ajustaActiveClassMenu(menuPai, menu) {
  // Remove de todos
  const dashMenu = document.getElementById('dashMenu')
  if (dashMenu?.classList.contains('active')) {
    dashMenu.classList.remove('active')
  }
  const cadMenu = document.getElementById('cadMenu')
  if (cadMenu?.classList.contains('active')) {
    cadMenu.classList.remove('active')
  }
  const relMenu = document.getElementById('relMenu')
  if (relMenu?.classList.contains('active')) {
    relMenu.classList.remove('active')
  }

  const reportMenu = document.getElementById('reportMenu')
  if (reportMenu?.classList.contains('active')) {
    reportMenu.classList.remove('active')
  }

  const conMenu = document.getElementById('conMenu')
  if (conMenu?.classList.contains('active')) {
    conMenu.classList.remove('active')
  }

  const perMenu = document.getElementById('perMenu')
  if (perMenu?.classList.contains('active')) {
    perMenu.classList.remove('active')
  }
  const usuMenu = document.getElementById('usuMenu')
  if (usuMenu?.classList.contains('active')) {
    usuMenu.classList.remove('active')
  }
  const altSenhaMenu = document.getElementById('altSenhaMenu')
  if (altSenhaMenu?.classList.contains('active')) {
    altSenhaMenu.classList.remove('active')
  }

  const verMenu = document.getElementById('verMenu')
  if (verMenu?.classList.contains('active')) {
    verMenu.classList.remove('active')
  }
  const serMenu = document.getElementById('serMenu')
  if (serMenu?.classList.contains('active')) {
    serMenu.classList.remove('active')
  }
  const cliMenu = document.getElementById('cliMenu')
  if (cliMenu?.classList.contains('active')) {
    cliMenu.classList.remove('active')
  }
  const modextMenu = document.getElementById('modextMenu')
  if (modextMenu?.classList.contains('active')) {
    modextMenu.classList.remove('active')
  }
  const publiMenu = document.getElementById('publiMenu')
  if (publiMenu?.classList.contains('active')) {
    publiMenu.classList.remove('active')
  }
  const paramMenu = document.getElementById('reportMenu')
  if (paramMenu?.classList.contains('active')) {
    paramMenu.classList.remove('active')
  }
  const instituitionMenu = document.getElementById('instituitionMenu')
  if (instituitionMenu?.classList.contains('active')) {
    instituitionMenu.classList.remove('active')
  }

  // Adiciona no indicado na função
  const cPai = document.getElementById(menuPai)
  if (cPai?.classList.contains('nav-link')) {
    cPai.classList.add('active')
  }
  const cMenu = document.getElementById(menu)
  if (cMenu?.classList.contains('nav-link')) {
    cMenu.classList.add('active')
  }
}


