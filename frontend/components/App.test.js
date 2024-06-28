import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import txt from '../i18n/index.json'

describe('Module 4 Project Tests', () => {
  describe('English Language', () => {

    let texts = getEntriesByKeyPrefix(txt.en, 'TEXT')
    for (let [key,val] of texts) {
      test(`${key} is visible`, () => {
        render(<App />)
        expect(screen.getByText(val)).toBeVisible()
      })
    }

    test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(txt.en.TEXT_HEADING_CREATE_ACCOUNT)).toBeVisible()
    })
    test(`TEXT_FAV_LANG_JS is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(txt.en.TEXT_FAV_LANG_JS)).toBeVisible()
    })
    test(`TEXT_FAV_LANG_RUST is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(txt.en.TEXT_FAV_LANG_RUST)).toBeVisible()
    })
    test(`TEXT_OPT_FAV_FOOD_1 is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(txt.en.TEXT_OPT_FAV_FOOD_1)).toBeVisible()
    })
    test(`TEXT_OPT_FAV_FOOD_2 is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(txt.en.TEXT_OPT_FAV_FOOD_2)).toBeVisible()
    })
    test(`TEXT_OPT_FAV_FOOD_3 is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(txt.en.TEXT_OPT_FAV_FOOD_3)).toBeVisible()
    })
    test(`TEXT_OPT_FAV_FOOD_4 is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(txt.en.TEXT_OPT_FAV_FOOD_4)).toBeVisible()
    })
    test(`TEXT_SUBMIT is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(txt.en.TEXT_SUBMIT)).toBeVisible()
    })
    test(`TEXT_FAV_LANG is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(txt.en.TEXT_FAV_LANG)).toBeVisible()
    })
    // LABELS
    test(`LABEL_USERNAME is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText(txt.en.LABEL_USERNAME)).toBeVisible()
    })
    test(`LABEL_FAV_FOOD is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText(txt.en.LABEL_FAV_FOOD)).toBeVisible()
    })
    test(`LABEL_ACCEPT_TERMS is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText(txt.en.LABEL_ACCEPT_TERMS)).toBeVisible()
    })
    // PLACEHOLDER_USERNAME
    test(`PLACEHOLDER_USERNAME is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByPlaceholderText(txt.en.PLACEHOLDER_USERNAME)).toBeVisible()
    })

  })

  describe('Spanish Language', () => {
    /*
      👉 TASK 3  This is done after making the UI multilingual.
    */
      let texts = getEntriesByKeyPrefix(txt.esp, 'TEXT')
      for (let [key, val] of texts) {
        test(`${key} is visible`, () => {
          render(<App lang="esp" />) // Ensure lang prop is passed here
          expect(screen.getByText(val)).toBeVisible()
        })
      }

    test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(txt.esp.TEXT_HEADING_CREATE_ACCOUNT)).toBeVisible()
    })
    test(`TEXT_FAV_LANG_JS is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(txt.esp.TEXT_FAV_LANG_JS)).toBeVisible()
    })
    test(`TEXT_FAV_LANG_RUST is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(txt.esp.TEXT_FAV_LANG_RUST)).toBeVisible()
    })
    test(`TEXT_OPT_FAV_FOOD_1 is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(txt.esp.TEXT_OPT_FAV_FOOD_1)).toBeVisible()
    })
    test(`TEXT_OPT_FAV_FOOD_2 is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(txt.esp.TEXT_OPT_FAV_FOOD_2)).toBeVisible()
    })
    test(`TEXT_OPT_FAV_FOOD_3 is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(txt.esp.TEXT_OPT_FAV_FOOD_3)).toBeVisible()
    })
    test(`TEXT_OPT_FAV_FOOD_4 is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(txt.esp.TEXT_OPT_FAV_FOOD_4)).toBeVisible()
    })

    test(`TEXT_FAV_LANG is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(txt.esp.TEXT_FAV_LANG)).toBeVisible()
    })
    test(`TEXT_SUBMIT is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(txt.esp.TEXT_SUBMIT)).toBeVisible()
    })




    // LABELS
    test(`LABEL_USERNAME is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByLabelText(txt.esp.LABEL_USERNAME)).toBeVisible()
    })
    test(`LABEL_FAV_FOOD is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByLabelText(txt.esp.LABEL_FAV_FOOD)).toBeVisible()
    })
    test(`LABEL_ACCEPT_TERMS is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByLabelText(txt.esp.LABEL_ACCEPT_TERMS)).toBeVisible()
    })
    // PLACEHOLDER_USERNAME
    test(`PLACEHOLDER_USERNAME is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByPlaceholderText(txt.esp.PLACEHOLDER_USERNAME)).toBeVisible()
    })



  })
  describe('getEntriesByKeyPrefix', () => {
    test('can extract the correct data', () => {

      const obj = {
        abc_1: "data_abc_1",
        abc_2: "data_abc_2",
        xyz_1: "data_xyz_1",
        abc_3: "data_abc_3",
      }

      const expected = [
        ["abc_1", "data_abc_1"],
        ["abc_2", "data_abc_2"],
        ["abc_3", "data_abc_3"],
      ]

      const expected2 = [
        ["xyz_1", "data_xyz_1"],
      ]

      expect(getEntriesByKeyPrefix(obj, "abc")).toEqual(expected)
      expect(getEntriesByKeyPrefix(obj, "xyz")).toEqual(expected2)
      expect(getEntriesByKeyPrefix(obj, "foo")).toEqual([])

    })
  })
})


function getEntriesByKeyPrefix(obj, keyPrefix) {
  return Object.entries(obj).filter(([key]) => key.split('_')[0] === keyPrefix)


}
