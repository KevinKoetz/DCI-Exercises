"use strict";
/* You should have a Pokemon constructor function that creates new pokemon that have name,
health, magic and a bunch of skills (the skills can be stored in an array or object). */
Object.defineProperty(exports, "__esModule", { value: true });
/* Pokemon or Skill Types, Pokemon can only have Skills of their possibly mixed Pokemon Type
Water > Fire > Earth > Air > Water > Fire ....
Skills of the Superior Type deal double dmg to a pokemon of a given type, skills of the inferior type half dmg*/
var Type;
(function (Type) {
    Type[Type["Water"] = 0] = "Water";
    Type[Type["Fire"] = 1] = "Fire";
    Type[Type["Earth"] = 2] = "Earth";
    Type[Type["Air"] = 3] = "Air";
})(Type || (Type = {}));
class Pokemon {
    constructor(name, magic, health, types) {
        this.name = name;
        this.magic = magic;
        this.health = health;
        this.types = types;
    }
    getStatus() {
        // prettier-ignore
        return `${this.name}:\nType:${this.types.map(typenum => Type[typenum]).join("/")}\nHealth:${this.health}\nMagic:${this.magic}\nSkills:${Object.getOwnPropertyNames(this).filter(prop => { const val = this[prop]; if (val instanceof Object && "isSkill" in val)
            return true; }).join(",")}`;
    }
    learnSkill(skill) {
        if (this[skill.skillName] === undefined && this.types.includes(skill.type)) {
            if (skill instanceof AttackSkill)
                this[skill.skillName] = Object.assign(skill.cast.bind(skill, this), skill);
            if (skill instanceof SelfSkill)
                this[skill.skillName] = Object.assign(skill.cast.bind(skill, this, this), skill);
            return "Skill learned";
        }
        else if (this[skill.skillName] !== undefined) {
            return "Skill already learned";
        }
        else
            return "Pokemon Type does not include Type of Skill";
    }
}
class Skill {
    constructor(name, type, magicCost) {
        this.skillName = name;
        this.type = type;
        this.magicCost = magicCost;
        this.isSkill = true;
        this.getSkillInfo = () => {
            let skillInfo = "";
            for (const [key, value] of Object.entries(this)) {
                if (!(value instanceof Function) && key !== "isSkill")
                    skillInfo += `${key}: ${value}\n`;
            }
            return skillInfo;
        };
    }
}
class AttackSkill extends Skill {
    constructor(name, type, magicCost, dmg) {
        super(name, type, magicCost);
        this.dmg = dmg;
    }
    cast(caster, target) {
        if (caster.magic > this.magicCost) {
            caster.magic -= this.magicCost;
            let dmg = this.dmg;
            //Double Dmg if the Target is of inferior Type
            if (target.types.includes((this.type + 1) % Object.keys(Type).length))
                dmg = dmg * 2;
            //Half Dmg if the Target is of superior Type
            if (target.types.includes((this.type - 1) % Object.keys(Type).length))
                dmg = dmg / 2;
            target.health -= dmg;
            return "Success";
        }
        else
            return "Insufficient Magic";
    }
}
class SelfSkill extends Skill {
    constructor(name, type, magicCost = 0, selfDmg = 0, heal = 0, magicRegen = 0) {
        super(name, type, magicCost);
        this.selfDmg = selfDmg;
        this.heal = heal;
        this.magicRegen = magicRegen;
    }
    cast(caster, target) {
        if (caster.magic > this.magicCost) {
            caster.magic -= this.magicCost;
            caster.health -= this.selfDmg;
            caster.health += this.heal;
            caster.magic += this.magicRegen;
            return "Success";
        }
        else
            return "Insufficient Magic";
    }
}
const pika = new Pokemon("Pikachu", 100, 100, [Type.Air, Type.Water]);
const bulba = new Pokemon("Bulbasaur", 100, 100, [Type.Earth]);
const lightning = new AttackSkill("lightning", Type.Air, 20, 50);
const regenerate = new SelfSkill("regenerate", Type.Air, 0, 0, 0, 100);
pika.learnSkill(regenerate);
console.log(lightning.getSkillInfo());
pika.learnSkill(lightning);
pika.lightning instanceof Function && pika.lightning(bulba);
console.log(pika.regenerate());
console.log(bulba.getStatus());
console.log(pika.getStatus());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7d0ZBQ3dGOztBQUl4Rjs7Z0hBRWdIO0FBQ2hILElBQUssSUFLSjtBQUxELFdBQUssSUFBSTtJQUNQLGlDQUFLLENBQUE7SUFDTCwrQkFBSSxDQUFBO0lBQ0osaUNBQUssQ0FBQTtJQUNMLDZCQUFHLENBQUE7QUFDTCxDQUFDLEVBTEksSUFBSSxLQUFKLElBQUksUUFLUjtBQUVELE1BQU0sT0FBTztJQUNYLFlBQVksSUFBWSxFQUFFLEtBQWEsRUFBRSxNQUFjLEVBQUUsS0FBYTtRQUNwRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBT0QsU0FBUztRQUNQLGtCQUFrQjtRQUNsQixPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLENBQUMsTUFBTSxXQUFXLElBQUksQ0FBQyxLQUFLLFlBQVksTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFFLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUcsR0FBRyxZQUFZLE1BQU0sSUFBSSxTQUFTLElBQUksR0FBRztZQUFDLE9BQU8sSUFBSSxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUE7SUFDelIsQ0FB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