import { CyberApeRarityLabel } from "../types";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getRandomApeIndex = (): string => {
  return Math.floor(Math.random() * 3333).toString();
};

export const logCredits = () => {
  console.log(`Welcome to Cyber Ape Age 🍌🐒    

@ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
@                                                               @
@                                                               @
@                   ^^!7777777777!^^^                           @
@                ^~7P5BBGGGGGGGGGPPPP7~~^^                      @
@                ?PBGGGP555J?????J55GGBBYY!^                    @
@              !B#B55&5JY?&#G5J???????JYP##5!                   @
@              !@#BBB#GPGG#&&&&#5J???????5P##!                  @
@            ^^~P&@&&&&&&&&&##&@&#GYYYJY555G#&~^^               @
@          ^7JJ?^#@#BBBB#&GP#&BBBB#&BGPPPPPB&&J?J7^             @
@         7GYJ?!GPY7~~~!7YYJJJ~^^^^?B#&#BBBJ^77JJ5G7            @
@       ^?&B555?&5JY??!7JJ^:!J??77?!^^PG   :?PYJJY5&?^          @
@       ^?&~^7YG5#P?YY?J5Y:.!5YY?JY?J:YG  YB5??55?!&?^          @
@       ^?&~^75GP&#55B#G?^:::~5B#GY5!7PY  GBJ5J?JJ^&?^          @
@        !5G^7PJ?##J::~7?YJJJJ7!::^75J:   GG~^7!~~~#?^          @
@          PP?!?!#J^#:?55Y~7?7^Y^J#J.     7PP7!~7J5!            @
@          ^7Y55P&B?~::^?Y!!!^.:.~?Y~     YBBGPPY7              @
@              !GG?^^^^^^~?!^^^^~~~7YP~   BP^                   @
@              !&7?P??777777777???JG~55!.?5?                    @
@              !&!?Y  .........   .G~:5B.&?^                    @
@              !BYJY!:.       .::^?5:.YB~B?                     @
@                B5^!!~~~~~~~~~!!7~.:~P&Y                       @
@                 J5?!~^^:::::^^^^~J5YBB^                       @
@                   ?PPY?!!!!7JJY5J^^ ?#                        @
@                      7YJJ&P!!!.     ?#                        @
@                       ^^^#J         ?#^                       @
@                       ^~J&J         J&J~^                     @
@                     ^!??B7.         .7B??!^                   @
@                  7PPPY7!               !7YPPP7                @
@ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @

Built with 🤍 by joaomendonca.net
`);
};
