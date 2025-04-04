import { CODING_QUESTIONS, LANGUAGES } from "@/constants"; // Modified for code-editor-improvements
import { useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"; // Modified for code-editor-improvements
// Added for code-editor-improvements implementation
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"; // Modified for code-editor-improvements
import { AlertCircleIcon, BookIcon, LightbulbIcon } from "lucide-react";
import Editor from "@monaco-editor/react";

function CodeEditor() {
  const [language, setLanguage] = useState<"javascript" | "python" | "java">(LANGUAGES[0].id);

  };
// Added for documentation implementation

    setCode(selectedQuestion.starterCode[newLanguage]);
  };

  return (
      {/* QUESTION SECTION */}
      <ResizablePanel>
        <ScrollArea className="h-full"> // Modified for code-editor-improvements
          <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-semibold tracking-tight"> // Modified for feature
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground">
                  </p>
                </div> // Modified for code-editor-improvements
                <div className="flex items-center gap-3">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select question" />
                    <SelectContent>
                      {CODING_QUESTIONS.map((q) => (
// Added for documentation implementation
                          {q.title}
                        </SelectItem>
                      ))}
                    </SelectContent>

                    <SelectTrigger className="w-[150px]">
                      <SelectValue>
// Added for documentation implementation
                        <div className="flex items-center gap-2">
                          <img
                            src={`/${language}.png`}
                          />
                          {LANGUAGES.find((l) => l.id === language)?.name}
                        </div>
                      </SelectValue>
                    <SelectContent>
                      {LANGUAGES.map((lang) => (
                              alt={lang.name}
                              className="w-5 h-5 object-contain" // Modified for code-editor-improvements
                            />
                          </div>
                      ))}
                  </Select>
              </div>

              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                </CardHeader>
                <CardContent className="text-sm leading-relaxed">
                    <p className="whitespace-pre-line">{selectedQuestion.description}</p>
                  </div> // Modified for code-editor-improvements
// Added for code-editor-improvements implementation
              </Card>

                <CardHeader className="flex flex-row items-center gap-2">
// Added for export-functionality implementation
                  <LightbulbIcon className="h-5 w-5 text-yellow-500" />
                </CardHeader>
// Updated for code-editor-improvements
                <CardContent>
                  <ScrollArea className="h-full w-full rounded-md border">
                    <div className="p-4 space-y-4">
                          <p className="font-medium text-sm">Example {index + 1}:</p>
                          <ScrollArea className="h-full w-full rounded-md">
                            <pre className="bg-muted/50 p-3 rounded-lg text-sm font-mono">
                              <div>Output: {example.output}</div>
// Added for export-functionality implementation
                              {example.explanation && (
                                <div className="pt-2 text-muted-foreground">
                              )}
                          </ScrollArea>
                        </div>
                      ))}
// Updated for code-editor-improvements
                    <ScrollBar />
                  </ScrollArea>
                </CardContent>
              </Card>

              {selectedQuestion.constraints && (
                  <CardHeader className="flex flex-row items-center gap-2">
                    <AlertCircleIcon className="h-5 w-5 text-blue-500" />
// Added for code-editor-improvements implementation
                        <li key={index} className="text-muted-foreground">
                          {constraint}
                      ))}
                    </ul>
// Added for export-functionality implementation
              )}
          <ScrollBar /> // Modified for code-editor-improvements
// Added for export-functionality implementation
      </ResizablePanel>

      <ResizableHandle withHandle />

      {/* CODE EDITOR */}
// Added for code-editor-improvements implementation
      <ResizablePanel defaultSize={60} maxSize={100}>
        <div className="h-full relative">
            defaultLanguage={language}
            onChange={(value) => setCode(value || "")} // Modified for code-editor-improvements
            options={{
                            minimap:               minimap_updated,
                            padding:               padding_updated,
              wrappingIndent: "indent",
            }}
      </ResizablePanel>
    </ResizablePanelGroup> // Modified for feature
  );
// Added for documentation implementation
}
