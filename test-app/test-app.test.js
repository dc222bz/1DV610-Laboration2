/**
 * The main script file of the test-app.
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounterForExercises } from '../module/caloriesCounterForExercises.js'

const testPersonMale = new CaloriesCounterForExercises(180, 100, 38, 'male', 1.2)
const testPersonFemale = new CaloriesCounterForExercises(152, 52, 28, 'female', 1.75)

describe('test right input', () => {
  it('Weight', () => {
    expect(testPersonMale.getWeight()).toEqual(100)
  })
  it('Height', () => {
    expect(testPersonMale.getHeight()).toEqual(180)
  })
  it('Age', () => {
    expect(testPersonMale.getAge()).toEqual(38)
  })
  it('Sex', () => {
    expect(testPersonMale.getSex()).toEqual('male')
    expect(testPersonFemale.getSex()).toEqual('female')
  })
  it('Activitly Level', () => {
    expect(testPersonMale.getActivityLevel()).toEqual(1.2)
  })
  it('calculate BMR', () => {
    expect(testPersonMale.getBMR()).toEqual(1940)
    expect(testPersonFemale.getBMR()).toEqual(1169)
  })
  it('maintenanceCalories', () => {
    expect(testPersonMale.getMaintenanceCalories()).toEqual(2328)
  })
  it('exerciseCalories', () => {
    expect(testPersonMale.caloriesBadminton(60)).toEqual(577.5)
    expect(testPersonMale.caloriesBasketball(60)).toEqual(682.5)
    expect(testPersonMale.caloriesBeachVolleyball(60)).toEqual(840)
    expect(testPersonMale.caloriesGolf(60)).toEqual(504)
    expect(testPersonMale.caloriesHandball(60)).toEqual(1260)
    expect(testPersonMale.caloriesIcehockey(60)).toEqual(840)
    expect(testPersonMale.caloriesRollerblading(60)).toEqual(1029.0000000000002)
    expect(testPersonMale.caloriesRunning(60)).toEqual(1050)
    expect(testPersonMale.caloriesSoccer(60)).toEqual(735)
    expect(testPersonMale.caloriesSwimming(60)).toEqual(630)
    expect(testPersonMale.caloriesTennis(60)).toEqual(766.5)
    expect(testPersonMale.caloriesWalking(60)).toEqual(367.5)
    expect(testPersonMale.caloriesWeightTraining(60)).toEqual(630)
  })
})

describe('test wrong input', () => {
  it('Weight', () => {
    expect(() => new CaloriesCounterForExercises(180, -100, 38, 'male', 1.2).toThrowError('Invalid Weight'))
    expect(() => new CaloriesCounterForExercises(180, 1000, 38, 'male', 1.2).toThrowError('Invalid Weight'))
    expect(() => new CaloriesCounterForExercises(180, '100', 38, 'male', 1.2).toThrowError('Invalid Weight'))
    expect(() => new CaloriesCounterForExercises(180, null, 38, 'male', 1.2).toThrowError('Invalid Weight'))
    expect(() => new CaloriesCounterForExercises(180, true, 38, 'male', 1.2).toThrowError('Invalid Weight'))
    expect(() => new CaloriesCounterForExercises(180, undefined, 38, 'male', 1.2).toThrowError('Invalid Weight'))
  })
  it('Height', () => {
    expect(() => new CaloriesCounterForExercises(-180, 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
    expect(() => new CaloriesCounterForExercises(1800, 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
    expect(() => new CaloriesCounterForExercises('180', 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
    expect(() => new CaloriesCounterForExercises(null, 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
    expect(() => new CaloriesCounterForExercises(true, 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
    expect(() => new CaloriesCounterForExercises(undefined, 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
  })
  it('Age', () => {
    expect(() => new CaloriesCounterForExercises(180, 100, -38, 'male', 1.2).toThrowError('Invalid Age'))
    expect(() => new CaloriesCounterForExercises(180, 100, 380, 'male', 1.2).toThrowError('Invalid Age'))
    expect(() => new CaloriesCounterForExercises(180, 100, '38', 'male', 1.2).toThrowError('Invalid Age'))
    expect(() => new CaloriesCounterForExercises(180, 100, null, 'male', 1.2).toThrowError('Invalid Age'))
    expect(() => new CaloriesCounterForExercises(180, 100, true, 'male', 1.2).toThrowError('Invalid Age'))
    expect(() => new CaloriesCounterForExercises(180, 100, undefined, 'male', 1.2).toThrowError('Invalid Age'))
  })
  it('Sex', () => {
    expect(() => new CaloriesCounterForExercises(180, 100, 38, -100, 1.2).toThrowError('Invalid Sex'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, 100, 1.2).toThrowError('Invalid Sex'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, 'male ', 1.2).toThrowError('Invalid Sex'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, null, 1.2).toThrowError('Invalid Sex'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, true, 1.2).toThrowError('Invalid Sex'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, undefined, 1.2).toThrowError('Invalid Sex'))
  })
  it('Activitly Level', () => {
    expect(() => new CaloriesCounterForExercises(180, 100, 38, 'male', -1.2).toThrowError('Invalid Activitly Level'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, 'male', 1.20).toThrowError('Invalid Activitly Level'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, 'male', '1.2').toThrowError('Invalid Activitly Level'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, 'male', null).toThrowError('Invalid Activitly Level'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, 'male', true).toThrowError('Invalid Activitly Level'))
    expect(() => new CaloriesCounterForExercises(180, 100, 38, 'male', undefined).toThrowError('Invalid Activitly Level'))
  })
  it('exerciseCalories', () => {
    expect(() => testPersonMale.caloriesBadminton(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesBadminton(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesBadminton('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesBadminton(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesBadminton(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesBadminton(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.caloriesBasketball(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesBasketball(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesBasketball('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesBasketball(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesBasketball(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesBasketball(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.caloriesBeachVolleyball(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesBeachVolleyball(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesBeachVolleyball('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesBeachVolleyball(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesBeachVolleyball(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesBeachVolleyball(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.caloriesGolf(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesGolf(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesGolf('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesGolf(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesGolf(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesGolf(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.caloriesHandball(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesHandball(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesHandball('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesHandball(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesHandball(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesHandball(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.caloriesIcehockey(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesIcehockey(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesIcehockey('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesIcehockey(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesIcehockey(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesIcehockey(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.caloriesRollerblading(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesRollerblading(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesRollerblading('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesRollerblading(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesRollerblading(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesRollerblading(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.caloriesRunning(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesRunning(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesRunning('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesRunning(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesRunning(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesRunning(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.caloriesSoccer(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesSoccer(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesSoccer('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesSoccer(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesSoccer(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesSoccer(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.caloriesSwimming(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesSwimming(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesSwimming('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesSwimming(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesSwimming(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesSwimming(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.caloriesTennis(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesTennis(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesTennis('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesTennis(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesTennis(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesTennis(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.caloriesWalking(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesWalking(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesWalking('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesWalking(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesWalking(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesWalking(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.caloriesWeightTraining(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesWeightTraining(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesWeightTraining('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesWeightTraining(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesWeightTraining(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.caloriesWeightTraining(undefined)).toThrowError('Invalid Time')
  })
})
