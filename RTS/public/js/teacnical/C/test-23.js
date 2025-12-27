const questions = [
  {
    "num": 1,
    "question_en": "What is the difference between 'restrict' and 'const' qualifiers?",
    "question_hi": "'restrict' और 'const' qualifiers में क्या अंतर है?",
    "options_en": ["restrict: no aliasing guarantee, const: read-only", "Both same", "restrict: read-only, const: no aliasing", "No difference"],
    "options_hi": ["restrict: no aliasing guarantee, const: read-only", "दोनों समान", "restrict: read-only, const: no aliasing", "कोई अंतर नहीं"],
    "answer_en": "restrict: no aliasing guarantee, const: read-only",
    "answer_hi": "restrict: no aliasing guarantee, const: read-only",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 'strict overflow' optimization in GCC?",
    "question_hi": "GCC में 'strict overflow' optimization क्या होती है?",
    "options_en": ["-fstrict-overflow assumes signed overflow doesn't happen", "No overflow check", "Checks all overflows", "Disabled by default"],
    "options_hi": ["-fstrict-overflow मानता है कि signed overflow नहीं होता", "कोई overflow check नहीं", "सभी overflows check करता है", "default से disabled"],
    "answer_en": "-fstrict-overflow assumes signed overflow doesn't happen",
    "answer_hi": "-fstrict-overflow मानता है कि signed overflow नहीं होता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is 'tree vectorization' in GCC?",
    "question_hi": "GCC में 'tree vectorization' क्या होती है?",
    "options_en": ["-ftree-vectorize for auto-vectorization at tree level", "No vectorization", "Only loop vectorization", "Manual vectorization"],
    "options_hi": ["tree level पर auto-vectorization के लिए -ftree-vectorize", "कोई vectorization नहीं", "केवल loop vectorization", "manual vectorization"],
    "answer_en": "-ftree-vectorize for auto-vectorization at tree level",
    "answer_hi": "tree level पर auto-vectorization के लिए -ftree-vectorize",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is 'SLP vectorization'?",
    "question_hi": "'SLP vectorization' क्या होती है?",
    "options_en": ["Superword Level Parallelism vectorization", "Simple Loop Parallelization", "Single Level Processing", "No such vectorization"],
    "options_hi": ["Superword Level Parallelism vectorization", "Simple Loop Parallelization", "Single Level Processing", "ऐसी कोई vectorization नहीं"],
    "answer_en": "Superword Level Parallelism vectorization",
    "answer_hi": "Superword Level Parallelism vectorization",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 'loop unswitching' optimization?",
    "question_hi": "'loop unswitching' optimization क्या होती है?",
    "options_en": ["Moves invariant conditionals out of loops", "Removes loops", "Switches loop order", "No such optimization"],
    "options_hi": ["invariant conditionals को loops के बाहर move करता है", "loops remove करता है", "loop order switch करता है", "ऐसी कोई optimization नहीं"],
    "answer_en": "Moves invariant conditionals out of loops",
    "answer_hi": "invariant conditionals को loops के बाहर move करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'loop interchange' optimization?",
    "question_hi": "'loop interchange' optimization क्या होती है?",
    "options_en": ["Changes loop nesting order for cache locality", "Removes loops", "Combines loops", "No such optimization"],
    "options_hi": ["cache locality के लिए loop nesting order change करता है", "loops remove करता है", "loops combine करता है", "ऐसी कोई optimization नहीं"],
    "answer_en": "Changes loop nesting order for cache locality",
    "answer_hi": "cache locality के लिए loop nesting order change करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'loop blocking/tiling'?",
    "question_hi": "'loop blocking/tiling' क्या होती है?",
    "options_en": ["Divides loops into blocks for cache optimization", "Removes blocks", "Adds blocks", "No such optimization"],
    "options_hi": ["cache optimization के लिए loops को blocks में divide करता है", "blocks remove करता है", "blocks add करता है", "ऐसी कोई optimization नहीं"],
    "answer_en": "Divides loops into blocks for cache optimization",
    "answer_hi": "cache optimization के लिए loops को blocks में divide करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'loop fusion' optimization?",
    "question_hi": "'loop fusion' optimization क्या होती है?",
    "options_en": ["Combines adjacent loops into single loop", "Splits loops", "Removes loops", "No such optimization"],
    "options_hi": ["adjacent loops को single loop में combine करता है", "loops split करता है", "loops remove करता है", "ऐसी कोई optimization नहीं"],
    "answer_en": "Combines adjacent loops into single loop",
    "answer_hi": "adjacent loops को single loop में combine करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'loop fission/distribution'?",
    "question_hi": "'loop fission/distribution' क्या होती है?",
    "options_en": ["Splits single loop into multiple loops", "Combines loops", "Removes loops", "No such optimization"],
    "options_hi": ["single loop को multiple loops में split करता है", "loops combine करता है", "loops remove करता है", "ऐसी कोई optimization नहीं"],
    "answer_en": "Splits single loop into multiple loops",
    "answer_hi": "single loop को multiple loops में split करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'loop peeling' optimization?",
    "question_hi": "'loop peeling' optimization क्या होती है?",
    "options_en": ["Removes first/last few iterations from loop", "Adds iterations", "Changes iterations", "No such optimization"],
    "options_hi": ["loop से first/last few iterations remove करता है", "iterations add करता है", "iterations change करता है", "ऐसी कोई optimization नहीं"],
    "answer_en": "Removes first/last few iterations from loop",
    "answer_hi": "loop से first/last few iterations remove करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'loop unrolling' factor?",
    "question_hi": "'loop unrolling' factor क्या होता है?",
    "options_en": ["Number of iterations copied in unrolled loop", "Loop count", "Iteration variable", "No factor"],
    "options_hi": ["unrolled loop में copied iterations की संख्या", "loop count", "iteration variable", "कोई factor नहीं"],
    "answer_en": "Number of iterations copied in unrolled loop",
    "answer_hi": "unrolled loop में copied iterations की संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'partial loop unrolling'?",
    "question_hi": "'partial loop unrolling' क्या होती है?",
    "options_en": ["Unrolls loop partially with cleanup loop", "Full unrolling", "No unrolling", "Manual unrolling"],
    "options_hi": ["cleanup loop के साथ loop को partially unroll करता है", "full unrolling", "कोई unrolling नहीं", "manual unrolling"],
    "answer_en": "Unrolls loop partially with cleanup loop",
    "answer_hi": "cleanup loop के साथ loop को partially unroll करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'loop versioning'?",
    "question_hi": "'loop versioning' क्या होती है?",
    "options_en": ["Creates multiple loop versions for different conditions", "Single version", "No versioning", "Runtime versioning"],
    "options_hi": ["different conditions के लिए multiple loop versions create करता है", "single version", "कोई versioning नहीं", "runtime versioning"],
    "answer_en": "Creates multiple loop versions for different conditions",
    "answer_hi": "different conditions के लिए multiple loop versions create करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'loop predication'?",
    "question_hi": "'loop predication' क्या होती है?",
    "options_en": ["Replaces branches with conditional moves", "Adds branches", "Removes conditions", "No predication"],
    "options_hi": ["branches को conditional moves से replace करता है", "branches add करता है", "conditions remove करता है", "कोई predication नहीं"],
    "answer_en": "Replaces branches with conditional moves",
    "answer_hi": "branches को conditional moves से replace करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'software pipelining'?",
    "question_hi": "'software pipelining' क्या होती है?",
    "options_en": ["Overlaps multiple loop iterations", "Sequential execution", "Pipeline hardware", "No pipelining"],
    "options_hi": ["multiple loop iterations overlap करता है", "sequential execution", "pipeline hardware", "कोई pipelining नहीं"],
    "answer_en": "Overlaps multiple loop iterations",
    "answer_hi": "multiple loop iterations overlap करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'auto-parallelization'?",
    "question_hi": "'auto-parallelization' क्या होती है?",
    "options_en": ["-ftree-parallelize-loops for automatic parallelization", "Manual parallelization", "No parallelization", "Only OpenMP"],
    "options_hi": ["automatic parallelization के लिए -ftree-parallelize-loops", "manual parallelization", "कोई parallelization नहीं", "केवल OpenMP"],
    "answer_en": "-ftree-parallelize-loops for automatic parallelization",
    "answer_hi": "automatic parallelization के लिए -ftree-parallelize-loops",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'graphite framework' in GCC?",
    "question_hi": "GCC में 'graphite framework' क्या होता है?",
    "options_en": ["Polyhedral model for loop optimizations", "Graph theory", "No framework", "Deprecated"],
    "options_hi": ["loop optimizations के लिए polyhedral model", "graph theory", "कोई framework नहीं", "deprecated"],
    "answer_en": "Polyhedral model for loop optimizations",
    "answer_hi": "loop optimizations के लिए polyhedral model",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'polyhedral model'?",
    "question_hi": "'polyhedral model' क्या होता है?",
    "options_en": ["Mathematical model for loop transformations", "Simple model", "No model", "Hardware model"],
    "options_hi": ["loop transformations के लिए mathematical model", "simple model", "कोई model नहीं", "hardware model"],
    "answer_en": "Mathematical model for loop transformations",
    "answer_hi": "loop transformations के लिए mathematical model",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'dependence analysis'?",
    "question_hi": "'dependence analysis' क्या होती है?",
    "options_en": ["Analyzes data dependencies for optimizations", "No analysis", "Only control flow", "Runtime analysis"],
    "options_hi": ["optimizations के लिए data dependencies analyze करती है", "कोई analysis नहीं", "केवल control flow", "runtime analysis"],
    "answer_en": "Analyzes data dependencies for optimizations",
    "answer_hi": "optimizations के लिए data dependencies analyze करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'alias analysis'?",
    "question_hi": "'alias analysis' क्या होती है?",
    "options_en": ["Determines if pointers can alias", "No analysis", "Only variables", "Simple analysis"],
    "options_hi": ["determines करती है कि pointers alias कर सकते हैं या नहीं", "कोई analysis नहीं", "केवल variables", "simple analysis"],
    "answer_en": "Determines if pointers can alias",
    "answer_hi": "determines करती है कि pointers alias कर सकते हैं या नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'points-to analysis'?",
    "question_hi": "'points-to analysis' क्या होती है?",
    "options_en": ["Determines what pointers point to", "No analysis", "Only arrays", "Simple analysis"],
    "options_hi": ["determines करती है कि pointers किसकी ओर point करते हैं", "कोई analysis नहीं", "केवल arrays", "simple analysis"],
    "answer_en": "Determines what pointers point to",
    "answer_hi": "determines करती है कि pointers किसकी ओर point करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'escape analysis'?",
    "question_hi": "'escape analysis' क्या होती है?",
    "options_en": ["Determines if object escapes its scope", "No escape", "Only stack", "Heap analysis"],
    "options_hi": ["determines करती है कि object अपने scope से escape होता है या नहीं", "कोई escape नहीं", "केवल stack", "heap analysis"],
    "answer_en": "Determines if object escapes its scope",
    "answer_hi": "determines करती है कि object अपने scope से escape होता है या नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'interprocedural optimization (IPO)'?",
    "question_hi": "'interprocedural optimization (IPO)' क्या होती है?",
    "options_en": ["Optimizations across function boundaries", "Within function only", "No IPO", "Link-time only"],
    "options_hi": ["function boundaries के across optimizations", "केवल function के within", "कोई IPO नहीं", "केवल link-time"],
    "answer_en": "Optimizations across function boundaries",
    "answer_hi": "function boundaries के across optimizations",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'whole-program optimization'?",
    "question_hi": "'whole-program optimization' क्या होती है?",
    "options_en": ["Optimizations using entire program information", "Partial program", "No whole-program", "Module only"],
    "options_hi": ["entire program information का उपयोग करके optimizations", "partial program", "कोई whole-program नहीं", "केवल module"],
    "answer_en": "Optimizations using entire program information",
    "answer_hi": "entire program information का उपयोग करके optimizations",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'dead code elimination'?",
    "question_hi": "'dead code elimination' क्या होती है?",
    "options_en": ["Removes unreachable/unused code", "Adds code", "Moves code", "No elimination"],
    "options_hi": ["unreachable/unused code remove करती है", "code add करती है", "code move करती है", "कोई elimination नहीं"],
    "answer_en": "Removes unreachable/unused code",
    "answer_hi": "unreachable/unused code remove करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'common subexpression elimination (CSE)'?",
    "question_hi": "'common subexpression elimination (CSE)' क्या होती है?",
    "options_en": ["Reuses computed expressions", "Recomputes expressions", "Removes expressions", "No elimination"],
    "options_hi": ["computed expressions reuse करती है", "expressions recompute करती है", "expressions remove करती है", "कोई elimination नहीं"],
    "answer_en": "Reuses computed expressions",
    "answer_hi": "computed expressions reuse करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'constant propagation'?",
    "question_hi": "'constant propagation' क्या होती है?",
    "options_en": ["Replaces variables with known constant values", "Adds variables", "Removes constants", "No propagation"],
    "options_hi": ["variables को known constant values से replace करती है", "variables add करती है", "constants remove करती है", "कोई propagation नहीं"],
    "answer_en": "Replaces variables with known constant values",
    "answer_hi": "variables को known constant values से replace करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'constant folding'?",
    "question_hi": "'constant folding' क्या होती है?",
    "options_en": ["Evaluates constant expressions at compile-time", "Runtime evaluation", "No folding", "Manual evaluation"],
    "options_hi": ["compile-time पर constant expressions evaluate करती है", "runtime evaluation", "कोई folding नहीं", "manual evaluation"],
    "answer_en": "Evaluates constant expressions at compile-time",
    "answer_hi": "compile-time पर constant expressions evaluate करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'copy propagation'?",
    "question_hi": "'copy propagation' क्या होती है?",
    "options_en": ["Replaces variable with its copy source", "Adds copies", "Removes variables", "No propagation"],
    "options_hi": ["variable को उसके copy source से replace करती है", "copies add करती है", "variables remove करती है", "कोई propagation नहीं"],
    "answer_en": "Replaces variable with its copy source",
    "answer_hi": "variable को उसके copy source से replace करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'value numbering'?",
    "question_hi": "'value numbering' क्या होती है?",
    "options_en": ["Assigns numbers to equivalent values", "No numbering", "Only variables", "Runtime numbering"],
    "options_hi": ["equivalent values को numbers assign करती है", "कोई numbering नहीं", "केवल variables", "runtime numbering"],
    "answer_en": "Assigns numbers to equivalent values",
    "answer_hi": "equivalent values को numbers assign करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'partial redundancy elimination (PRE)'?",
    "question_hi": "'partial redundancy elimination (PRE)' क्या होती है?",
    "options_en": ["Eliminates partially redundant computations", "Adds redundancy", "No elimination", "Full redundancy"],
    "options_hi": ["partially redundant computations eliminate करती है", "redundancy add करती है", "कोई elimination नहीं", "full redundancy"],
    "answer_en": "Eliminates partially redundant computations",
    "answer_hi": "partially redundant computations eliminate करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'strength reduction'?",
    "question_hi": "'strength reduction' क्या होती है?",
    "options_en": ["Replaces expensive operations with cheaper ones", "Makes operations stronger", "No reduction", "Adds operations"],
    "options_hi": ["expensive operations को cheaper ones से replace करती है", "operations stronger बनाती है", "कोई reduction नहीं", "operations add करती है"],
    "answer_en": "Replaces expensive operations with cheaper ones",
    "answer_hi": "expensive operations को cheaper ones से replace करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'induction variable optimization'?",
    "question_hi": "'induction variable optimization' क्या होती है?",
    "options_en": ["Optimizes loop induction variables", "No optimization", "Only constants", "Runtime variables"],
    "options_hi": ["loop induction variables optimize करती है", "कोई optimization नहीं", "केवल constants", "runtime variables"],
    "answer_en": "Optimizes loop induction variables",
    "answer_hi": "loop induction variables optimize करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'register allocation'?",
    "question_hi": "'register allocation' क्या होती है?",
    "options_en": ["Assigns variables to CPU registers", "No allocation", "Only stack", "Heap allocation"],
    "options_hi": ["variables को CPU registers assign करती है", "कोई allocation नहीं", "केवल stack", "heap allocation"],
    "answer_en": "Assigns variables to CPU registers",
    "answer_hi": "variables को CPU registers assign करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'graph coloring register allocation'?",
    "question_hi": "'graph coloring register allocation' क्या होती है?",
    "options_en": ["Uses graph coloring for register allocation", "No coloring", "Simple allocation", "Random allocation"],
    "options_hi": ["register allocation के लिए graph coloring का उपयोग करती है", "कोई coloring नहीं", "simple allocation", "random allocation"],
    "answer_en": "Uses graph coloring for register allocation",
    "answer_hi": "register allocation के लिए graph coloring का उपयोग करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'spilling' in register allocation?",
    "question_hi": "register allocation में 'spilling' क्या होती है?",
    "options_en": ["Stores registers to memory when registers insufficient", "No spilling", "Only loading", "Register overflow"],
    "options_hi": ["registers insufficient होने पर registers को memory में store करती है", "कोई spilling नहीं", "केवल loading", "register overflow"],
    "answer_en": "Stores registers to memory when registers insufficient",
    "answer_hi": "registers insufficient होने पर registers को memory में store करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'live range analysis'?",
    "question_hi": "'live range analysis' क्या होती है?",
    "options_en": ["Determines where variable is live (used)", "No analysis", "Only declaration", "Simple analysis"],
    "options_hi": ["determines करती है कि variable कहाँ live है (used)", "कोई analysis नहीं", "केवल declaration", "simple analysis"],
    "answer_en": "Determines where variable is live (used)",
    "answer_hi": "determines करती है कि variable कहाँ live है (used)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'instruction scheduling'?",
    "question_hi": "'instruction scheduling' क्या होती है?",
    "options_en": ["Reorders instructions for pipeline efficiency", "No scheduling", "Random order", "Source order"],
    "options_hi": ["pipeline efficiency के लिए instructions reorder करती है", "कोई scheduling नहीं", "random order", "source order"],
    "answer_en": "Reorders instructions for pipeline efficiency",
    "answer_hi": "pipeline efficiency के लिए instructions reorder करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'software prefetching'?",
    "question_hi": "'software prefetching' क्या होती है?",
    "options_en": ["Inserts prefetch instructions for data", "No prefetching", "Hardware only", "Manual prefetch"],
    "options_hi": ["data के लिए prefetch instructions insert करती है", "कोई prefetching नहीं", "केवल hardware", "manual prefetch"],
    "answer_en": "Inserts prefetch instructions for data",
    "answer_hi": "data के लिए prefetch instructions insert करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'branch prediction hints'?",
    "question_hi": "'branch prediction hints' क्या होते हैं?",
    "options_en": ["Compiler hints for branch prediction", "No hints", "Runtime hints", "Hardware only"],
    "options_hi": ["branch prediction के लिए compiler hints", "कोई hints नहीं", "runtime hints", "केवल hardware"],
    "answer_en": "Compiler hints for branch prediction",
    "answer_hi": "branch prediction के लिए compiler hints",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'tail call optimization'?",
    "question_hi": "'tail call optimization' क्या होती है?",
    "options_en": ["Replaces call with jump when last operation", "No optimization", "All calls", "Only recursive"],
    "options_hi": ["last operation होने पर call को jump से replace करती है", "कोई optimization नहीं", "सभी calls", "केवल recursive"],
    "answer_en": "Replaces call with jump when last operation",
    "answer_hi": "last operation होने पर call को jump से replace करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'function inlining heuristics'?",
    "question_hi": "'function inlining heuristics' क्या होती हैं?",
    "options_en": ["Rules for deciding when to inline functions", "No heuristics", "Always inline", "Never inline"],
    "options_hi": ["functions inline करने का निर्णय लेने के rules", "कोई heuristics नहीं", "हमेशा inline", "कभी नहीं inline"],
    "answer_en": "Rules for deciding when to inline functions",
    "answer_hi": "functions inline करने का निर्णय लेने के rules",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'cross-module inlining'?",
    "question_hi": "'cross-module inlining' क्या होती है?",
    "options_en": ["Inlining across compilation units with LTO", "No cross-module", "Only same module", "Manual inlining"],
    "options_hi": ["LTO के साथ compilation units के across inlining", "कोई cross-module नहीं", "केवल same module", "manual inlining"],
    "answer_en": "Inlining across compilation units with LTO",
    "answer_hi": "LTO के साथ compilation units के across inlining",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'devirtualization'?",
    "question_hi": "'devirtualization' क्या होती है?",
    "options_en": ["Replaces virtual calls with direct calls", "No devirtualization", "Adds virtual calls", "Runtime only"],
    "options_hi": ["virtual calls को direct calls से replace करती है", "कोई devirtualization नहीं", "virtual calls add करती है", "केवल runtime"],
    "answer_en": "Replaces virtual calls with direct calls",
    "answer_hi": "virtual calls को direct calls से replace करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'speculative devirtualization'?",
    "question_hi": "'speculative devirtualization' क्या होती है?",
    "options_en": ["Guesses most likely target for virtual call", "No speculation", "All targets", "Runtime check"],
    "options_hi": ["virtual call के लिए most likely target guess करती है", "कोई speculation नहीं", "सभी targets", "runtime check"],
    "answer_en": "Guesses most likely target for virtual call",
    "answer_hi": "virtual call के लिए most likely target guess करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'constant propagation across functions'?",
    "question_hi": "'functions के across constant propagation' क्या होती है?",
    "options_en": ["IPO: propagates constants across function calls", "No propagation", "Within function only", "Manual propagation"],
    "options_hi": ["IPO: function calls के across constants propagate करती है", "कोई propagation नहीं", "केवल function के within", "manual propagation"],
    "answer_en": "IPO: propagates constants across function calls",
    "answer_hi": "IPO: function calls के across constants propagate करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'function specialization'?",
    "question_hi": "'function specialization' क्या होती है?",
    "options_en": ["Creates specialized version for specific arguments", "No specialization", "Generic only", "Runtime specialization"],
    "options_hi": ["specific arguments के लिए specialized version create करती है", "कोई specialization नहीं", "केवल generic", "runtime specialization"],
    "answer_en": "Creates specialized version for specific arguments",
    "answer_hi": "specific arguments के लिए specialized version create करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'link-time constant propagation'?",
    "question_hi": "'link-time constant propagation' क्या होती है?",
    "options_en": ["LTO: propagates constants across modules", "No LTO propagation", "Compile-time only", "Manual propagation"],
    "options_hi": ["LTO: modules के across constants propagate करती है", "कोई LTO propagation नहीं", "केवल compile-time", "manual propagation"],
    "answer_en": "LTO: propagates constants across modules",
    "answer_hi": "LTO: modules के across constants propagate करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'profile-guided optimization feedback'?",
    "question_hi": "'profile-guided optimization feedback' क्या होता है?",
    "options_en": ["Uses runtime profile data for optimization", "No profile", "Static only", "Manual profile"],
    "options_hi": ["optimization के लिए runtime profile data का उपयोग करता है", "कोई profile नहीं", "केवल static", "manual profile"],
    "answer_en": "Uses runtime profile data for optimization",
    "answer_hi": "optimization के लिए runtime profile data का उपयोग करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'hot/cold partitioning'?",
    "question_hi": "'hot/cold partitioning' क्या होती है?",
    "options_en": ["Separates frequently/rarely executed code", "No partitioning", "Mixed code", "Random partitioning"],
    "options_hi": ["frequently/rarely executed code को separate करती है", "कोई partitioning नहीं", "mixed code", "random partitioning"],
    "answer_en": "Separates frequently/rarely executed code",
    "answer_hi": "frequently/rarely executed code को separate करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'basic block reordering'?",
    "question_hi": "'basic block reordering' क्या होती है?",
    "options_en": ["Reorders basic blocks for better cache locality", "No reordering", "Source order", "Random order"],
    "options_hi": ["better cache locality के लिए basic blocks reorder करती है", "कोई reordering नहीं", "source order", "random order"],
    "answer_en": "Reorders basic blocks for better cache locality",
    "answer_hi": "better cache locality के लिए basic blocks reorder करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'function splitting'?",
    "question_hi": "'function splitting' क्या होती है?",
    "options_en": ["Splits large function into smaller ones", "No splitting", "Combines functions", "Manual splitting"],
    "options_hi": ["large function को smaller ones में split करती है", "कोई splitting नहीं", "functions combine करती है", "manual splitting"],
    "answer_en": "Splits large function into smaller ones",
    "answer_hi": "large function को smaller ones में split करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'outlining'?",
    "question_hi": "'outlining' क्या होती है?",
    "options_en": ["Extracts duplicate code into separate function", "No outlining", "Inlining", "Manual extraction"],
    "options_hi": ["duplicate code को separate function में extract करती है", "कोई outlining नहीं", "inlining", "manual extraction"],
    "answer_en": "Extracts duplicate code into separate function",
    "answer_hi": "duplicate code को separate function में extract करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'code layout optimization'?",
    "question_hi": "'code layout optimization' क्या होती है?",
    "options_en": ["Arranges code in memory for better performance", "No layout", "Source order", "Random layout"],
    "options_hi": ["better performance के लिए memory में code arrange करती है", "कोई layout नहीं", "source order", "random layout"],
    "answer_en": "Arranges code in memory for better performance",
    "answer_hi": "better performance के लिए memory में code arrange करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'cache line alignment'?",
    "question_hi": "'cache line alignment' क्या होती है?",
    "options_en": ["Aligns data to cache line boundaries", "No alignment", "Byte alignment", "Page alignment"],
    "options_hi": ["data को cache line boundaries पर align करती है", "कोई alignment नहीं", "byte alignment", "page alignment"],
    "answer_en": "Aligns data to cache line boundaries",
    "answer_hi": "data को cache line boundaries पर align करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'prefetch distance'?",
    "question_hi": "'prefetch distance' क्या होती है?",
    "options_en": ["How far ahead to prefetch data", "No distance", "Immediate", "Fixed distance"],
    "options_hi": ["data को कितना ahead prefetch करना है", "कोई distance नहीं", "immediate", "fixed distance"],
    "answer_en": "How far ahead to prefetch data",
    "answer_hi": "data को कितना ahead prefetch करना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'software managed cache'?",
    "question_hi": "'software managed cache' क्या होता है?",
    "options_en": ["Explicit cache management by software", "Hardware only", "No management", "Automatic"],
    "options_hi": ["software द्वारा explicit cache management", "केवल hardware", "कोई management नहीं", "automatic"],
    "answer_en": "Explicit cache management by software",
    "answer_hi": "software द्वारा explicit cache management",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'non-temporal store'?",
    "question_hi": "'non-temporal store' क्या होता है?",
    "options_en": ["Store that bypasses cache", "Cached store", "No store", "Temporal store"],
    "options_hi": ["cache को bypass करने वाला store", "cached store", "कोई store नहीं", "temporal store"],
    "answer_en": "Store that bypasses cache",
    "answer_hi": "cache को bypass करने वाला store",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'write-combining'?",
    "question_hi": "'write-combining' क्या होती है?",
    "options_en": ["Combines multiple writes into larger write", "No combining", "Separate writes", "Read combining"],
    "options_hi": ["multiple writes को larger write में combine करती है", "कोई combining नहीं", "separate writes", "read combining"],
    "answer_en": "Combines multiple writes into larger write",
    "answer_hi": "multiple writes को larger write में combine करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'memory disambiguation'?",
    "question_hi": "'memory disambiguation' क्या होती है?",
    "options_en": ["Determines if memory accesses alias", "No disambiguation", "Assumes aliasing", "Runtime check"],
    "options_hi": ["determines करती है कि memory accesses alias करते हैं या नहीं", "कोई disambiguation नहीं", "aliasing assume करती है", "runtime check"],
    "answer_en": "Determines if memory accesses alias",
    "answer_hi": "determines करती है कि memory accesses alias करते हैं या नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'runtime feedback' for optimization?",
    "question_hi": "optimization के लिए 'runtime feedback' क्या होता है?",
    "options_en": ["Profiling information from actual execution", "No feedback", "Static analysis", "Compiler guess"],
    "options_hi": ["actual execution से profiling information", "कोई feedback नहीं", "static analysis", "compiler guess"],
    "answer_en": "Profiling information from actual execution",
    "answer_hi": "actual execution से profiling information",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'edge profiling'?",
    "question_hi": "'edge profiling' क्या होती है?",
    "options_en": ["Profiles control flow edges (branches)", "No profiling", "Function profiling", "Line profiling"],
    "options_hi": ["control flow edges (branches) profile करती है", "कोई profiling नहीं", "function profiling", "line profiling"],
    "answer_en": "Profiles control flow edges (branches)",
    "answer_hi": "control flow edges (branches) profile करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'value profiling'?",
    "question_hi": "'value profiling' क्या होती है?",
    "options_en": ["Profiles values of variables/expressions", "No profiling", "Only types", "Runtime values"],
    "options_hi": ["variables/expressions के values profile करती है", "कोई profiling नहीं", "केवल types", "runtime values"],
    "answer_en": "Profiles values of variables/expressions",
    "answer_hi": "variables/expressions के values profile करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'context-sensitive profiling'?",
    "question_hi": "'context-sensitive profiling' क्या होती है?",
    "options_en": ["Profiles considering calling context", "No context", "Simple profiling", "Function only"],
    "options_hi": ["calling context consider करते हुए profile करती है", "कोई context नहीं", "simple profiling", "केवल function"],
    "answer_en": "Profiles considering calling context",
    "answer_hi": "calling context consider करते हुए profile करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'path profiling'?",
    "question_hi": "'path profiling' क्या होती है?",
    "options_en": ["Profiles execution paths through program", "No path", "Basic block only", "Function only"],
    "options_hi": ["program के through execution paths profile करती है", "कोई path नहीं", "केवल basic block", "केवल function"],
    "answer_en": "Profiles execution paths through program",
    "answer_hi": "program के through execution paths profile करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'hardware performance counter' usage?",
    "question_hi": "'hardware performance counter' usage क्या होता है?",
    "options_en": ["Uses CPU counters for profiling information", "No hardware", "Software only", "Estimation"],
    "options_hi": ["profiling information के लिए CPU counters का उपयोग करता है", "कोई hardware नहीं", "केवल software", "estimation"],
    "answer_en": "Uses CPU counters for profiling information",
    "answer_hi": "profiling information के लिए CPU counters का उपयोग करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'sampling-based profiling'?",
    "question_hi": "'sampling-based profiling' क्या होती है?",
    "options_en": ["Periodically samples program state", "Continuous", "No sampling", "Full trace"],
    "options_hi": ["periodically program state sample करती है", "continuous", "कोई sampling नहीं", "full trace"],
    "answer_en": "Periodically samples program state",
    "answer_hi": "periodically program state sample करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'instrumentation-based profiling'?",
    "question_hi": "'instrumentation-based profiling' क्या होती है?",
    "options_en": ["Inserts profiling code into program", "No instrumentation", "Sampling only", "Hardware only"],
    "options_hi": ["program में profiling code insert करती है", "कोई instrumentation नहीं", "केवल sampling", "केवल hardware"],
    "answer_en": "Inserts profiling code into program",
    "answer_hi": "program में profiling code insert करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'trace-based optimization'?",
    "question_hi": "'trace-based optimization' क्या होती है?",
    "options_en": ["Uses execution traces for optimization", "No traces", "Static only", "Profile only"],
    "options_hi": ["optimization के लिए execution traces का उपयोग करती है", "कोई traces नहीं", "केवल static", "केवल profile"],
    "answer_en": "Uses execution traces for optimization",
    "answer_hi": "optimization के लिए execution traces का उपयोग करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'region-based optimization'?",
    "question_hi": "'region-based optimization' क्या होती है?",
    "options_en": ["Optimizes regions (hot traces) of code", "No regions", "Whole program", "Function only"],
    "options_hi": ["code के regions (hot traces) optimize करती है", "कोई regions नहीं", "whole program", "केवल function"],
    "answer_en": "Optimizes regions (hot traces) of code",
    "answer_hi": "code के regions (hot traces) optimize करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'superblock formation'?",
    "question_hi": "'superblock formation' क्या होती है?",
    "options_en": ["Forms single-entry multiple-exit basic block sequences", "No formation", "Basic blocks only", "Functions only"],
    "options_hi": ["single-entry multiple-exit basic block sequences form करती है", "कोई formation नहीं", "केवल basic blocks", "केवल functions"],
    "answer_en": "Forms single-entry multiple-exit basic block sequences",
    "answer_hi": "single-entry multiple-exit basic block sequences form करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'hyperblock formation'?",
    "question_hi": "'hyperblock formation' क्या होती है?",
    "options_en": ["Forms predicated basic block sequences", "No formation", "Superblock only", "Trace only"],
    "options_hi": ["predicated basic block sequences form करती है", "कोई formation नहीं", "केवल superblock", "केवल trace"],
    "answer_en": "Forms predicated basic block sequences",
    "answer_hi": "predicated basic block sequences form करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'predicated execution'?",
    "question_hi": "'predicated execution' क्या होती है?",
    "options_en": ["Conditional execution without branches", "Branches only", "No predication", "Runtime checks"],
    "options_hi": ["branches के बिना conditional execution", "केवल branches", "कोई predication नहीं", "runtime checks"],
    "answer_en": "Conditional execution without branches",
    "answer_hi": "branches के बिना conditional execution",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'if-conversion'?",
    "question_hi": "'if-conversion' क्या होती है?",
    "options_en": ["Converts control flow to data flow (predication)", "No conversion", "Only branches", "Manual conversion"],
    "options_hi": ["control flow को data flow में convert करती है (predication)", "कोई conversion नहीं", "केवल branches", "manual conversion"],
    "answer_en": "Converts control flow to data flow (predication)",
    "answer_hi": "control flow को data flow में convert करती है (predication)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'speculative execution' at compile-time?",
    "question_hi": "compile-time पर 'speculative execution' क्या होती है?",
    "options_en": ["Moves code across branches speculatively", "No speculation", "Runtime only", "Hardware only"],
    "options_hi": ["branches के across code को speculatively move करती है", "कोई speculation नहीं", "केवल runtime", "केवल hardware"],
    "answer_en": "Moves code across branches speculatively",
    "answer_hi": "branches के across code को speculatively move करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'partial dead code elimination'?",
    "question_hi": "'partial dead code elimination' क्या होती है?",
    "options_en": ["Eliminates code dead on some paths", "No elimination", "All paths", "Full elimination"],
    "options_hi": ["some paths पर dead code eliminate करती है", "कोई elimination नहीं", "सभी paths", "full elimination"],
    "answer_en": "Eliminates code dead on some paths",
    "answer_hi": "some paths पर dead code eliminate करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'partial redundancy elimination on predicated code'?",
    "question_hi": "'predicated code पर partial redundancy elimination' क्या होती है?",
    "options_en": ["PRE for predicated (if-converted) code", "No PRE", "Only unpredicated", "Manual"],
    "options_hi": ["predicated (if-converted) code के लिए PRE", "कोई PRE नहीं", "केवल unpredicated", "manual"],
    "answer_en": "PRE for predicated (if-converted) code",
    "answer_hi": "predicated (if-converted) code के लिए PRE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'software pipelining with modulo scheduling'?",
    "question_hi": "'modulo scheduling के साथ software pipelining' क्या होती है?",
    "options_en": ["Advanced software pipelining technique", "Simple pipelining", "No scheduling", "Manual"],
    "options_hi": ["advanced software pipelining technique", "simple pipelining", "कोई scheduling नहीं", "manual"],
    "answer_en": "Advanced software pipelining technique",
    "answer_hi": "advanced software pipelining technique",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'kernel-only software pipelining'?",
    "question_hi": "'kernel-only software pipelining' क्या होती है?",
    "options_en": ["Pipelines only the kernel (steady state) of loop", "Whole loop", "No kernel", "Prologue/epilogue only"],
    "options_hi": ["loop के केवल kernel (steady state) को pipeline करती है", "whole loop", "कोई kernel नहीं", "केवल prologue/epilogue"],
    "answer_en": "Pipelines only the kernel (steady state) of loop",
    "answer_hi": "loop के केवल kernel (steady state) को pipeline करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'prologue/epilogue code generation' for software pipelining?",
    "question_hi": "software pipelining के लिए 'prologue/epilogue code generation' क्या होती है?",
    "options_en": ["Generates setup/cleanup code for pipelined loop", "No prologue/epilogue", "Kernel only", "Manual generation"],
    "options_hi": ["pipelined loop के लिए setup/cleanup code generate करती है", "कोई prologue/epilogue नहीं", "केवल kernel", "manual generation"],
    "answer_en": "Generates setup/cleanup code for pipelined loop",
    "answer_hi": "pipelined loop के लिए setup/cleanup code generate करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'register renaming' at compile-time?",
    "question_hi": "compile-time पर 'register renaming' क्या होती है?",
    "options_en": ["Assigns new registers to break dependencies", "No renaming", "Same registers", "Hardware only"],
    "options_hi": ["dependencies break करने के लिए new registers assign करती है", "कोई renaming नहीं", "same registers", "केवल hardware"],
    "answer_en": "Assigns new registers to break dependencies",
    "answer_hi": "dependencies break करने के लिए new registers assign करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'software data prefetching scheduling'?",
    "question_hi": "'software data prefetching scheduling' क्या होती है?",
    "options_en": ["Schedules prefetch instructions appropriately", "No scheduling", "Random placement", "Beginning only"],
    "options_hi": ["prefetch instructions appropriately schedule करती है", "कोई scheduling नहीं", "random placement", "केवल beginning"],
    "answer_en": "Schedules prefetch instructions appropriately",
    "answer_hi": "prefetch instructions appropriately schedule करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'hinting for hardware prefetchers'?",
    "question_hi": "'hardware prefetchers के लिए hinting' क्या होती है?",
    "options_en": ["Compiler hints to guide hardware prefetchers", "No hints", "Software only", "Manual hints"],
    "options_hi": ["hardware prefetchers guide करने के लिए compiler hints", "कोई hints नहीं", "केवल software", "manual hints"],
    "answer_en": "Compiler hints to guide hardware prefetchers",
    "answer_hi": "hardware prefetchers guide करने के लिए compiler hints",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'data layout transformation'?",
    "question_hi": "'data layout transformation' क्या होती है?",
    "options_en": ["Transforms data structures for better locality", "No transformation", "Code only", "Manual transformation"],
    "options_hi": ["better locality के लिए data structures transform करती है", "कोई transformation नहीं", "केवल code", "manual transformation"],
    "answer_en": "Transforms data structures for better locality",
    "answer_hi": "better locality के लिए data structures transform करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'array padding' optimization?",
    "question_hi": "'array padding' optimization क्या होती है?",
    "options_en": ["Adds padding to avoid cache conflicts", "No padding", "Removes padding", "Manual padding"],
    "options_hi": ["cache conflicts avoid करने के लिए padding add करती है", "कोई padding नहीं", "padding remove करती है", "manual padding"],
    "answer_en": "Adds padding to avoid cache conflicts",
    "answer_hi": "cache conflicts avoid करने के लिए padding add करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'structure splitting'?",
    "question_hi": "'structure splitting' क्या होती है?",
    "options_en": ["Splits struct into hot/cold parts", "No splitting", "Combines structs", "Manual splitting"],
    "options_hi": ["struct को hot/cold parts में split करती है", "कोई splitting नहीं", "structs combine करती है", "manual splitting"],
    "answer_en": "Splits struct into hot/cold parts",
    "answer_hi": "struct को hot/cold parts में split करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'structure reordering'?",
    "question_hi": "'structure reordering' क्या होती है?",
    "options_en": ["Reorders struct members for better locality", "No reordering", "Source order", "Random order"],
    "options_hi": ["better locality के लिए struct members reorder करती है", "कोई reordering नहीं", "source order", "random order"],
    "answer_en": "Reorders struct members for better locality",
    "answer_hi": "better locality के लिए struct members reorder करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'field packing'?",
    "question_hi": "'field packing' क्या होती है?",
    "options_en": ["Packs multiple fields into fewer bytes", "No packing", "Adds padding", "Manual packing"],
    "options_hi": ["multiple fields को fewer bytes में pack करती है", "कोई packing नहीं", "padding add करती है", "manual packing"],
    "answer_en": "Packs multiple fields into fewer bytes",
    "answer_hi": "multiple fields को fewer bytes में pack करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'bit-field compaction'?",
    "question_hi": "'bit-field compaction' क्या होती है?",
    "options_en": ["Compacts bit-fields to save space", "No compaction", "Adds space", "Manual compaction"],
    "options_hi": ["space save करने के लिए bit-fields compact करती है", "कोई compaction नहीं", "space add करती है", "manual compaction"],
    "answer_en": "Compacts bit-fields to save space",
    "answer_hi": "space save करने के लिए bit-fields compact करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'automatic parallelization for multicore'?",
    "question_hi": "multicore के लिए 'automatic parallelization' क्या होती है?",
    "options_en": ["Automatically parallelizes for multiple cores", "No parallelization", "Single core only", "Manual parallelization"],
    "options_hi": ["multiple cores के लिए automatically parallelize करती है", "कोई parallelization नहीं", "केवल single core", "manual parallelization"],
    "answer_en": "Automatically parallelizes for multiple cores",
    "answer_hi": "multiple cores के लिए automatically parallelize करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'automatic vectorization for SIMD'?",
    "question_hi": "SIMD के लिए 'automatic vectorization' क्या होती है?",
    "options_en": ["Automatically vectorizes for SIMD instructions", "No vectorization", "Scalar only", "Manual vectorization"],
    "options_hi": ["SIMD instructions के लिए automatically vectorize करती है", "कोई vectorization नहीं", "केवल scalar", "manual vectorization"],
    "answer_en": "Automatically vectorizes for SIMD instructions",
    "answer_hi": "SIMD instructions के लिए automatically vectorize करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'outer loop vectorization'?",
    "question_hi": "'outer loop vectorization' क्या होती है?",
    "options_en": ["Vectorizes outer loops instead of inner", "Inner only", "No vectorization", "Both loops"],
    "options_hi": ["inner के बजाय outer loops vectorize करती है", "केवल inner", "कोई vectorization नहीं", "दोनों loops"],
    "answer_en": "Vectorizes outer loops instead of inner",
    "answer_hi": "inner के बजाय outer loops vectorize करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'loop distribution for vectorization'?",
    "question_hi": "vectorization के लिए 'loop distribution' क्या होती है?",
    "options_en": ["Distributes loop to enable vectorization", "No distribution", "Fusion for vectorization", "Manual distribution"],
    "options_hi": ["vectorization enable करने के लिए loop distribute करती है", "कोई distribution नहीं", "vectorization के लिए fusion", "manual distribution"],
    "answer_en": "Distributes loop to enable vectorization",
    "answer_hi": "vectorization enable करने के लिए loop distribute करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'loop fusion for vectorization'?",
    "question_hi": "vectorization के लिए 'loop fusion' क्या होती है?",
    "options_en": ["Fuses loops to create vectorizable loop", "No fusion", "Distribution for vectorization", "Manual fusion"],
    "options_hi": ["vectorizable loop create करने के लिए loops fuse करती है", "कोई fusion नहीं", "vectorization के लिए distribution", "manual fusion"],
    "answer_en": "Fuses loops to create vectorizable loop",
    "answer_hi": "vectorizable loop create करने के लिए loops fuse करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'loop peeling for alignment'?",
    "question_hi": "alignment के लिए 'loop peeling' क्या होती है?",
    "options_en": ["Peels iterations to achieve aligned accesses", "No peeling", "For unrolling", "Manual peeling"],
    "options_hi": ["aligned accesses achieve करने के लिए iterations peel करती है", "कोई peeling नहीं", "unrolling के लिए", "manual peeling"],
    "answer_en": "Peels iterations to achieve aligned accesses",
    "answer_hi": "aligned accesses achieve करने के लिए iterations peel करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'runtime alignment check' for vectorization?",
    "question_hi": "vectorization के लिए 'runtime alignment check' क्या होती है?",
    "options_en": ["Generates code to check alignment at runtime", "No check", "Compile-time only", "Assumes aligned"],
    "options_hi": ["runtime पर alignment check करने के लिए code generate करती है", "कोई check नहीं", "केवल compile-time", "aligned assume करती है"],
    "answer_en": "Generates code to check alignment at runtime",
    "answer_hi": "runtime पर alignment check करने के लिए code generate करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'multiple versioning for alignment'?",
    "question_hi": "alignment के लिए 'multiple versioning' क्या होती है?",
    "options_en": ["Creates aligned/unaligned loop versions", "Single version", "No versioning", "Manual versioning"],
    "options_hi": ["aligned/unaligned loop versions create करती है", "single version", "कोई versioning नहीं", "manual versioning"],
    "answer_en": "Creates aligned/unaligned loop versions",
    "answer_hi": "aligned/unaligned loop versions create करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'gather/scatter vectorization'?",
    "question_hi": "'gather/scatter vectorization' क्या होती है?",
    "options_en": ["Vectorizes indirect (non-contiguous) accesses", "Only contiguous", "No vectorization", "Manual"],
    "options_hi": ["indirect (non-contiguous) accesses vectorize करती है", "केवल contiguous", "कोई vectorization नहीं", "manual"],
    "answer_en": "Vectorizes indirect (non-contiguous) accesses",
    "answer_hi": "indirect (non-contiguous) accesses vectorize करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'masked vectorization'?",
    "question_hi": "'masked vectorization' क्या होती है?",
    "options_en": ["Vectorizes with masks for conditional execution", "No masking", "Full vectorization", "Manual masking"],
    "options_hi": ["conditional execution के लिए masks के साथ vectorize करती है", "कोई masking नहीं", "full vectorization", "manual masking"],
    "answer_en": "Vectorizes with masks for conditional execution",
    "answer_hi": "conditional execution के लिए masks के साथ vectorize करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'vector length agnostic programming'?",
    "question_hi": "'vector length agnostic programming' क्या होती है?",
    "options_en": ["Code works with any vector length", "Fixed length", "No vectors", "Runtime length"],
    "options_hi": ["code किसी भी vector length के साथ काम करता है", "fixed length", "कोई vectors नहीं", "runtime length"],
    "answer_en": "Code works with any vector length",
    "answer_hi": "code किसी भी vector length के साथ काम करता है",
    "attempted": false,
    "selected": ""
  }
];
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// ----------------- Final Submit -----------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;

            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
            <div class="circle" style="background:${color};"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};