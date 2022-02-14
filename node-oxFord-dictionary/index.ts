import axios from "axios";
import dotenv from "dotenv";

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

const envres = dotenv.config();
if (envres.error) {
  throw envres.error;
}

const getWordInformation = async (searchWord: string) => {
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
    const response = await axios.get<EntriesResponse>(
      `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${searchWord}`,
      { headers: { app_id: process.env.APP_ID, app_key: process.env.APP_KEY } }
    );
    const result = response.data.results.find((result) =>
      result.word.includes(searchWord)
    );
    if (!result) return null;
    const word = result.word;
    const category = result.lexicalEntries[0].lexicalCategory.text;
    const definitions = result.lexicalEntries[0].entries[0].senses.map(
      (sense) => sense.shortDefinitions
    );
    const provider = response.data.metadata.provider;

    return { word, category, definitions, provider };
  } catch (error) {
    console.log("Malformed Request.");
    return null;
  }
};

(async function main() {
  const word = process.argv[2];
  const information = await getWordInformation(word);
  if (!information) {
    console.log("Unable to find word.");
    return;
  }

  console.log(information.word + " " + information.category);
  information.definitions.forEach((def, idx) =>
    console.log(idx + 1 + ". " + def)
  );

  console.log("Provider: "+ information.provider);
  
})();
