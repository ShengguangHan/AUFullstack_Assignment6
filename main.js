import './style.css'
import {isNumber, mySort} from './src/utils'

const btn = document.querySelector('#add')
let list = []
btn.addEventListener('click', () => {
  const input = document.querySelector('#myInput')
  const value = +input.value

  if(isNumber(value)){
    list.push(value)
  }
  console.log(list);
  input.value = ''
  const orderList = mySort(list)

  const tbody = document.querySelector('tbody')
  tbody.innerHTML = ''

  orderList.forEach((element,index) => {
    const tr = document.createElement('tr')
    const th = document.createElement('th')
    const td = document.createElement('td')

  td.textContent = element
  th.textContent = index + 1
  tr.append(th,td)
  tbody.append(tr)
  })
})