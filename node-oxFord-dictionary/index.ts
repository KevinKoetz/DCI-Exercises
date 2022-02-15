import axios from "axios"; //To fetch the Data from the API
import dotenv from "dotenv"; //To not have my API Key inside the repository


//Just Copy pasted the API Response they provided from their website. 
//You can ignore this, it's just here to have autocompletion/not need to go back and forth inside the API Documentation
interface EntriesResponse {
  id: string;
  metadata: {
    provider: string;
  };
  results: [
    {
      id: "happy";
      language: "en-gb";
      lexicalEntries: [
        {
          entries: [
            {
              etymologies: [
                "Middle English (in the sense ‘lucky’): from the noun hap+ -y"
              ];
              inflections: [
                {
                  inflectedForm: "happier";
                },
                {
                  inflectedForm: "happiest";
                }
              ];
              pronunciations: [
                {
                  audioFile: "https://audio.oxforddictionaries.com/en/mp3/happy_gb_1.mp3";
                  dialects: ["British English"];
                  phoneticNotation: "IPA";
                  phoneticSpelling: "ˈhapi";
                }
              ];
              senses: [
                {
                  definitions: ["feeling or showing pleasure or contentment"];
                  examples: [
                    {
                      text: "Melissa came in looking happy and excited";
                    },
                    {
                      notes: [
                        {
                          text: "with clause";
                          type: "grammaticalNote";
                        }
                      ];
                      text: "we're just happy that he's still alive";
                    },
                    {
                      notes: [
                        {
                          text: "with infinitive";
                          type: "grammaticalNote";
                        }
                      ];
                      text: "they are happy to see me doing well";
                    }
                  ];
                  id: "m_en_gbus0450170.009";
                  shortDefinitions: ["feeling contentment"];
                  subsenses: [
                    {
                      constructions: [
                        {
                          text: "happy about";
                        }
                      ];
                      definitions: [
                        "having a sense of trust and confidence in (a person, arrangement, or situation)"
                      ];
                      examples: [
                        {
                          text: "he was not happy about the proposals";
                        },
                        {
                          text: "I can't say they looked too happy about it, but a deal's a deal";
                        }
                      ];
                      id: "m_en_gbus0450170.013";
                      notes: [
                        {
                          text: '"happy about"';
                          type: "wordFormNote";
                        }
                      ];
                      shortDefinitions: ["trusting and confident in"];
                    },
                    {
                      constructions: [
                        {
                          text: "happy with";
                        }
                      ];
                      definitions: [
                        "satisfied with the quality or standard of"
                      ];
                      examples: [
                        {
                          text: "I'm happy with his performance";
                        }
                      ];
                      id: "m_en_gbus0450170.014";
                      notes: [
                        {
                          text: '"happy with"';
                          type: "wordFormNote";
                        }
                      ];
                      shortDefinitions: ["satisfied with quality of"];
                    },
                    {
                      definitions: ["willing to do something"];
                      examples: [
                        {
                          text: "we will be happy to advise you";
                        }
                      ];
                      id: "m_en_gbus0450170.015";
                      notes: [
                        {
                          text: "with infinitive";
                          type: "grammaticalNote";
                        }
                      ];
                      shortDefinitions: ["willing to do"];
                      synonyms: [
                        {
                          language: "en";
                          text: "willing";
                        },
                        {
                          language: "en";
                          text: "glad";
                        },
                        {
                          language: "en";
                          text: "ready";
                        },
                        {
                          language: "en";
                          text: "pleased";
                        },
                        {
                          language: "en";
                          text: "delighted";
                        },
                        {
                          language: "en";
                          text: "contented";
                        }
                      ];
                      thesaurusLinks: [
                        {
                          entry_id: "happy";
                          sense_id: "t_en_gb0006743.002";
                        }
                      ];
                    },
                    {
                      definitions: ["used in greetings"];
                      examples: [
                        {
                          text: "happy Christmas";
                        }
                      ];
                      id: "m_en_gbus0450170.017";
                      notes: [
                        {
                          text: "attributive";
                          type: "grammaticalNote";
                        }
                      ];
                      shortDefinitions: ["used in greetings"];
                    }
                  ];
                  synonyms: [
                    {
                      language: "en";
                      text: "contented";
                    },
                    {
                      language: "en";
                      text: "content";
                    },
                    {
                      language: "en";
                      text: "cheerful";
                    },
                    {
                      language: "en";
                      text: "cheery";
                    },
                    {
                      language: "en";
                      text: "merry";
                    },
                    {
                      language: "en";
                      text: "joyful";
                    },
                    {
                      language: "en";
                      text: "jovial";
                    },
                    {
                      language: "en";
                      text: "jolly";
                    },
                    {
                      language: "en";
                      text: "joking";
                    },
                    {
                      language: "en";
                      text: "jocular";
                    },
                    {
                      language: "en";
                      text: "gleeful";
                    },
                    {
                      language: "en";
                      text: "carefree";
                    },
                    {
                      language: "en";
                      text: "untroubled";
                    },
                    {
                      language: "en";
                      text: "delighted";
                    },
                    {
                      language: "en";
                      text: "smiling";
                    },
                    {
                      language: "en";
                      text: "beaming";
                    },
                    {
                      language: "en";
                      text: "grinning";
                    },
                    {
                      language: "en";
                      text: "glowing";
                    },
                    {
                      language: "en";
                      text: "satisfied";
                    },
                    {
                      language: "en";
                      text: "gratified";
                    },
                    {
                      language: "en";
                      text: "buoyant";
                    },
                    {
                      language: "en";
                      text: "radiant";
                    },
                    {
                      language: "en";
                      text: "sunny";
                    },
                    {
                      language: "en";
                      text: "blithe";
                    },
                    {
                      language: "en";
                      text: "joyous";
                    },
                    {
                      language: "en";
                      text: "beatific";
                    },
                    {
                      language: "en";
                      text: "blessed";
                    }
                  ];
                  thesaurusLinks: [
                    {
                      entry_id: "happy";
                      sense_id: "t_en_gb0006743.001";
                    }
                  ];
                },
                {
                  definitions: ["fortunate and convenient"];
                  examples: [
                    {
                      text: "he had the happy knack of making people like him";
                    }
                  ];
                  id: "m_en_gbus0450170.020";
                  notes: [
                    {
                      text: "attributive";
                      type: "grammaticalNote";
                    }
                  ];
                  shortDefinitions: ["fortunate and convenient"];
                  synonyms: [
                    {
                      language: "en";
                      text: "fortunate";
                    },
                    {
                      language: "en";
                      text: "lucky";
                    },
                    {
                      language: "en";
                      text: "favourable";
                    },
                    {
                      language: "en";
                      text: "advantageous";
                    },
                    {
                      language: "en";
                      text: "opportune";
                    },
                    {
                      language: "en";
                      text: "timely";
                    },
                    {
                      language: "en";
                      text: "well timed";
                    },
                    {
                      language: "en";
                      text: "convenient";
                    },
                    {
                      language: "en";
                      text: "propitious";
                    },
                    {
                      language: "en";
                      text: "felicitous";
                    },
                    {
                      language: "en";
                      text: "auspicious";
                    },
                    {
                      language: "en";
                      text: "beneficial";
                    },
                    {
                      language: "en";
                      text: "helpful";
                    }
                  ];
                  thesaurusLinks: [
                    {
                      entry_id: "happy";
                      sense_id: "t_en_gb0006743.003";
                    }
                  ];
                },
                {
                  definitions: [
                    "inclined to use a specified thing excessively or at random"
                  ];
                  examples: [
                    {
                      text: "they tended to be grenade-happy";
                    }
                  ];
                  id: "m_en_gbus0450170.022";
                  notes: [
                    {
                      text: "in combination";
                      type: "grammaticalNote";
                    }
                  ];
                  registers: [
                    {
                      id: "informal";
                      text: "Informal";
                    }
                  ];
                  shortDefinitions: ["inclined to use"];
                }
              ];
            }
          ];
          language: "en-gb";
          lexicalCategory: {
            id: "adjective";
            text: "Adjective";
          };
          phrases: [
            {
              id: "as_happy_as_Larry";
              text: "as happy as Larry";
            },
            {
              id: "as_happy_as_a_clam";
              text: "as happy as a clam";
            },
            {
              id: "as_happy_as_a_pig_in_shit";
              text: "as happy as a pig in shit";
            },
            {
              id: "as_happy_as_a_sandboy";
              text: "as happy as a sandboy";
            }
          ];
          text: "happy";
        }
      ];
      type: "headword";
      word: "happy";
    }
  ];
  word: string;
}

//This line loads my API Key from a .env file (located on my personal PC) inside process.env.APP_KEY and the APP in inside process.env.APP_ID
const envres = dotenv.config();
if (envres.error) {
  throw envres.error; //throw an Error if the file is not found or anything went wrong (Rest wont run anyway)
}


//Function to get the word Information, returns an Object: {word, category, definitions, provider}
const getWordInformation = async (searchWord: string) => {
  //If the .env does not contain my APP_KEY or ID throw Error and go out.
  if (
    !(
      "APP_ID" in process.env &&
      process.env.APP_ID &&
      "APP_KEY" in process.env &&
      process.env.APP_KEY
    )
  )
    throw new Error("APP Key or ID not found in environment variables.");

  try {
    //Get request to the API
    const response = await axios.get<EntriesResponse>(
      `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${searchWord}`,
      { headers: { app_id: process.env.APP_ID, app_key: process.env.APP_KEY } }
    );

    //Finding the first result if it is there, might be that no word like that was found.
    const result = response.data.results.find((result) =>
      result.word.includes(searchWord)
    );

    //Return null if word wasn't found
    if (!result) return null;

    //Prepare result values
    const word = result.word;
    const category = result.lexicalEntries[0].lexicalCategory.text;
    const definitions = result.lexicalEntries[0].entries[0].senses.map(
      (sense) => sense.shortDefinitions
    );
    const provider = response.data.metadata.provider;

    //Return them in an object
    return { word, category, definitions, provider };

  } catch (error) {
    //In case someone inputs something strange
    console.log("Malformed Request.");
    return null;
  }
};

//Main function wrapped in () with a () after it to invoke it immediately. Could have also just written main() afterwards.
(async function main() {

  //Getting the word from the user (should be the first argument, so index 2 in argv)
  const word = process.argv[2];

  //get the Information
  const information = await getWordInformation(word);

  //If information is null, log that the word wasn't found and return.
  if (!information) {
    console.log("Unable to find word.");
    return;
  }

  //Otherwise log the output.
  console.log(information.word + " " + information.category);
  information.definitions.forEach((def, idx) =>
    console.log(idx + 1 + ". " + def)
  );
  console.log("Provider: "+ information.provider);
  
})();
