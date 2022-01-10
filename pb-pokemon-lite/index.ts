/* You should have a Pokemon constructor function that creates new pokemon that have name, 
health, magic and a bunch of skills (the skills can be stored in an array or object). */

import { type } from "os";

/* Pokemon or Skill Types, Pokemon can only have Skills of their possibly mixed Pokemon Type 
Water > Fire > Earth > Air > Water > Fire ....
Skills of the Superior Type deal double dmg to a pokemon of a given type, skills of the inferior type half dmg*/
enum Type{
  Water,
  Fire,
  Earth,
  Air
} 

class Pokemon {
  constructor(name: string, magic: number, health: number, types: Type[]) {
    this.name = name;
    this.magic = magic;
    this.health = health;
    this.types = types;
  }
  name;
  magic;
  health;
  types;
  [key: string]: string | number | Type[] |  Skill | Function;

  getStatus() {
    // prettier-ignore
    return `${this.name}:\nType:${this.types.map(typenum => Type[typenum]).join("/")}\nHealth:${this.health}\nMagic:${this.magic}\nSkills:${Object.getOwnPropertyNames(this).filter(prop => {const val = this[prop]; if(val instanceof Object && "isSkill" in val)return true}).join(",")}`
  }

  learnSkill(skill: Skill) {
    if (this[skill.skillName] === undefined && this.types.includes(skill.type)) {
      if(skill instanceof AttackSkill) this[skill.skillName] = Object.assign(skill.cast.bind(skill, this), skill)
      if(skill instanceof SelfSkill) this[skill.skillName] = Object.assign(skill.cast.bind(skill, this, this), skill)
      return "Skill learned"
    }else if(this[skill.skillName] !== undefined){
      return "Skill already learned"
    }else return "Pokemon Type does not include Type of Skill"
  }
}

abstract class Skill {
  constructor(name: string, type: Type, magicCost: number) {
    this.skillName = name;
    this.type = type;
    this.magicCost = magicCost;
    this.isSkill = true;
    this.getSkillInfo = () => {
      let skillInfo = "";
      for(const [key,value] of Object.entries(this)){
        if(!(value instanceof Function) && key !== "isSkill") skillInfo += `${key}: ${value}\n`
      }
      return skillInfo
    }
  }
  isSkill: true;
  skillName;
  type;
  magicCost;
  getSkillInfo;
  abstract cast(caster: Pokemon, target: Pokemon): "Success" | "Insufficient Magic";
}

class AttackSkill extends Skill {
  constructor(name: string, type: Type, magicCost: number, dmg: number) {
    super(name, type, magicCost);
    this.dmg = dmg;
  }
  dmg;
  cast(caster: Pokemon, target: Pokemon) {
    if(caster.magic > this.magicCost){
      caster.magic -= this.magicCost;
      let dmg = this.dmg;
      //Double Dmg if the Target is of inferior Type
      if(target.types.includes((this.type + 1) % Object.keys(Type).length)) dmg = dmg*2
      //Half Dmg if the Target is of superior Type
      if(target.types.includes((this.type - 1) % Object.keys(Type).length)) dmg = dmg/2
      target.health -= dmg;
      return "Success"
    }else return "Insufficient Magic"
  }
}

class SelfSkill extends Skill {
  constructor(name: string, type: Type, magicCost: number = 0, selfDmg: number = 0, heal: number = 0, magicRegen: number = 0) {
    super(name, type, magicCost);
    this.selfDmg = selfDmg;
    this.heal = heal;
    this. magicRegen = magicRegen;
  }
  selfDmg;
  heal;
  magicRegen;
  cast(caster: Pokemon, target: Pokemon){
    if(caster.magic > this.magicCost){
      caster.magic -= this.magicCost;
      caster.health -= this.selfDmg;
      caster.health += this.heal;
      caster.magic += this.magicRegen;
      return "Success"
    }else return "Insufficient Magic"
  }
} 

const pika = new Pokemon("Pikachu", 100, 100, [Type.Air, Type.Water]);
const bulba = new Pokemon("Bulbasaur", 100, 100, [Type.Earth])
const lightning = new AttackSkill("lightning", Type.Air, 20, 50)
const regenerate = new SelfSkill("regenerate", Type.Air, 0,0,0,100)
pika.learnSkill(regenerate)
console.log(lightning.getSkillInfo())
pika.learnSkill(lightning)
pika.lightning instanceof Function && pika.lightning(bulba)
console.log(pika.regenerate());

console.log(bulba.getStatus());
console.log(pika.getStatus());
