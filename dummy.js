import { faker } from '@faker-js/faker';


export function createOwner() {
  console.log( {

    oID: faker.number.int(),
    fullname: faker.person.fullName(),
    birthdate: faker.date.birthdate().toLocaleDateString("en-US"),
    aOd: faker.helpers.arrayElement(['Alive', 'Dead']),
    registeredAt: faker.date.past(),
  })
} 

export function createDogs(){

  console.log({

  dID: faker.number.int(),
  dogName: faker.person.middleName(),
  dogBreed: faker.animal.dog(),
  birthdate: faker.date.birthdate().toLocaleDateString("en-US"),
  dogSex: faker.person.sex(),
  aOd: faker.helpers.arrayElement(['Alive', 'Dead']),
  }) 

}
export const DOGS = faker.helpers.multiple( createDogs,{
  dogcount: 50,

});

export const OWNERS = faker.helpers.multiple( createOwner, {
  count: 25,
});