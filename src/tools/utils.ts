import moment from 'moment'
import { categoryImages } from './variables'
import { TData, TFormattedData, TSummary } from '../type'

const re =
  /(([12][0-9]\d{2}-\d{2}-\d{2})|((0\d|1[0-2])|\b[1-9])[-./](([0-2]\d|3[01])|[1-9])[-./][12]\d{1,3})/g

const formattedNotes = (arr: TData[]): TFormattedData[] => {
  const formattedArr = arr.map((elem: TData) => {
    const formattedDate = moment(elem.created)
      .locale('en')
      .format('MMM DD, YYYY')

    const arrDates = elem.content.match(re)
    const selectionDates = !!arrDates ? arrDates.join(', ') : ''
    return {
      ...elem,
      created: formattedDate,
      dates: selectionDates,
      image: categoryImages[elem.category],
    }
  })
  return formattedArr
}

const sumNotes = (arrInit: TData[]): TSummary[] | [] => {
  const arrRes = arrInit.reduce((acc, elem) => {
    const isInArr = acc.find((item) => item.category === elem.category)

    if (isInArr) {
      if (elem.archived) {
        isInArr.archived += 1
      } else {
        isInArr.active += 1
      }
      return acc
    }
    const newItem = {
      id: elem.category,
      category: elem.category,
      active: +!elem.archived,
      archived: +elem.archived,
      image: categoryImages[elem.category],
    }
    return [...acc, newItem]
  }, [] as TSummary[] | [])
  return arrRes
}

export { sumNotes, formattedNotes }
