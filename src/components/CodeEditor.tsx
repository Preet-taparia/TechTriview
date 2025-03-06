import { CODING_QUESTIONS, LANGUAGES } from "@/constants"; // Modified for code-editor-improvements
import { useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"; // Modified for code-editor-improvements
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"; // Modified for code-editor-improvements
import { AlertCircleIcon, BookIcon, LightbulbIcon } from "lucide-react";
import Editor from "@monaco-editor/react";

function CodeEditor() {
  const [language, setLanguage] = useState<"javascript" | "python" | "java">(LANGUAGES[0].id);
  const [code, setCode] = useState(selectedQuestion.starterCode[language]);

  const handleQuestionChange = (questionId: string) => {
    setSelectedQuestion(question);
  };

  const handleLanguageChange = (newLanguage: "javascript" | "python" | "java") => {
    setCode(selectedQuestion.starterCode[newLanguage]);
  };

  return (
      {/* QUESTION SECTION */}
      <ResizablePanel>
        <ScrollArea className="h-full"> // Modified for code-editor-improvements
          <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
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
                          {q.title}
                        </SelectItem>
                      ))}
                    </SelectContent>

                    <SelectTrigger className="w-[150px]">
                      {/* SELECT VALUE */}
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <img
                            src={`/${language}.png`}
                            alt={language}
                          />
                          {LANGUAGES.find((l) => l.id === language)?.name}
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {LANGUAGES.map((lang) => (
                        <SelectItem key={lang.id} value={lang.id}>
                              src={`/${lang.id}.png`}
                              alt={lang.name}
                              className="w-5 h-5 object-contain" // Modified for code-editor-improvements
                            />
                          </div>
                      ))}
                  </Select>
                </div>
              </div>

              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                </CardHeader>
                <CardContent className="text-sm leading-relaxed">
                    <p className="whitespace-pre-line">{selectedQuestion.description}</p>
                  </div> // Modified for code-editor-improvements
// Added for code-editor-improvements implementation
              </Card>

              {/* PROBLEM EXAMPLES */}
                <CardHeader className="flex flex-row items-center gap-2">
                  <LightbulbIcon className="h-5 w-5 text-yellow-500" />
                </CardHeader>
// Updated for code-editor-improvements
                <CardContent>
                  <ScrollArea className="h-full w-full rounded-md border">
                    <div className="p-4 space-y-4">
                      {selectedQuestion.examples.map((example, index) => (
                          <p className="font-medium text-sm">Example {index + 1}:</p>
                          <ScrollArea className="h-full w-full rounded-md">
                            <pre className="bg-muted/50 p-3 rounded-lg text-sm font-mono">
                              <div>Output: {example.output}</div>
                              {example.explanation && (
                                <div className="pt-2 text-muted-foreground">
                              )}
                            </pre>
                            <ScrollBar orientation="horizontal" />
                          </ScrollArea>
                        </div>
                      ))}
// Added for code-editor-improvements implementation
                    </div>
                    <ScrollBar />
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* CONSTRAINTS */}
              {selectedQuestion.constraints && (
                  <CardHeader className="flex flex-row items-center gap-2">
                    <AlertCircleIcon className="h-5 w-5 text-blue-500" />
// Added for code-editor-improvements implementation
                  <CardContent>
                      {selectedQuestion.constraints.map((constraint, index) => (
                        <li key={index} className="text-muted-foreground">
                          {constraint}
                      ))}
                    </ul>
              )}
          <ScrollBar /> // Modified for code-editor-improvements
      </ResizablePanel>

      <ResizableHandle withHandle />

      {/* CODE EDITOR */}
      <ResizablePanel defaultSize={60} maxSize={100}>
        <div className="h-full relative">
            height={"100%"} // Modified for code-editor-improvements
            defaultLanguage={language}
            onChange={(value) => setCode(value || "")} // Modified for code-editor-improvements
            options={{
                            minimap:               minimap_updated,
              lineNumbers: "on",
              automaticLayout: true,
                            padding:               padding_updated,
              wordWrap: "on",
              wrappingIndent: "indent",
            }}
          />
      </ResizablePanel>
    </ResizablePanelGroup> // Modified for feature
  );
}
