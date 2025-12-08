"use client";

import { useState } from "react";
import Link from "next/link";
import BackgroundBlob from "../components/BackgroundBlob";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ClassificationResult {
  isCyberbullying: boolean;
  confidence: number;
}

export default function BetterThreadsProject() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ClassificationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch("/api/classify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input }),
      });

      if (!response.ok) {
        throw new Error("Failed to classify text");
      }

      const data = await response.json();
      setResult({
        isCyberbullying: data.isCyberbullying ?? false,
        confidence: data.confidence ?? 0,
      });
    } catch (error) {
      setError(
        "Unable to connect to the classification service. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const returnCyberbullyingColor = (
    isCyberbullying: boolean,
    confidence: number
  ) => {
    if (confidence > 75) {
      if (isCyberbullying)
        return "bg-red-500/20 border border-red-500/30 text-red-400";
      if (!isCyberbullying)
        return "bg-green-500/20 border border-green-500/30 text-green-400";
    }
    return "bg-yellow-500/20 border border-yellow-500/30 text-yellow-400";
  };

  const returnCyberbullyingText = (
    isCyberbullying: boolean,
    confidence: number
  ) => {
    if (isCyberbullying && confidence > 75) return "Cyberbullying";
    if (isCyberbullying && confidence <= 75) return "Possibly Cyberbullying";
    if (!isCyberbullying && confidence > 75) return "Safe";
    if (!isCyberbullying && confidence <= 75) return "Possibly Safe";
  };

  const returnProgressBarColor = (
    isCyberbullying: boolean,
    confidence: number
  ) => {
    if (confidence > 75) {
      if (isCyberbullying) return "bg-red-500/50";
      if (!isCyberbullying) return "bg-green-500/50";
    }

    return "bg-yellow-500/50";
  };

  return (
    <div className="w-screen flex justify-center items-center bg-zinc-900">
      <BackgroundBlob />
      <main className="mx-auto max-w-3xl px-6 py-24 sm:py-32 z-50">
        <div className="space-y-12">
          <div className="space-y-6">
            <Breadcrumb>
              <BreadcrumbList className="text-base">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>The Better Threads Project</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                The Better Threads Project
              </h1>
              <code className="text-sm leading-relaxed block text-muted-foreground">
                A GPT model built from scratch to identify and classify
                cyberbullying in online conversations.
              </code>
            </div>
          </div>

          {/* Test Interface */}
          <div className="space-y-6">
            <h2 className="text-base font-medium text-muted-foreground uppercase">
              Try It Out
            </h2>
            <div className="p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg">
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="relative mt-2">
                    <textarea
                      id="text-input"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Enter a message to classify..."
                      className="w-full p-3 pr-12 pb-12 rounded-lg bg-zinc-800 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/20 resize-none"
                      rows={4}
                    />
                    <button
                      type="submit"
                      disabled={loading || !input.trim()}
                      className="absolute bottom-5 right-3 w-8 h-8 rounded-full bg-blue-400/30 border border-blue-400/50 text-foreground hover:bg-blue-400/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center pointer-cursor"
                      title={loading ? "Classifying..." : "Classify"}
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m22 2-7 20-4-9-9-4Z" />
                          <path d="M22 2 11 13" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {result && (
                <div className="mt-4 p-4 rounded-lg bg-zinc-800 border border-white/10 space-y-3 mt-6">
                  <div className="flex items-center justify-between">
                    <div
                      className={`px-3 py-1 rounded-md text-sm font-medium ${returnCyberbullyingColor(
                        result.isCyberbullying,
                        result.confidence
                      )}`}
                    >
                      <code>
                        {returnCyberbullyingText(
                          result.isCyberbullying,
                          result.confidence
                        )}
                      </code>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <code>
                        <span className="hidden sm:inline">Confidence:</span>{" "}
                        {result.confidence}%
                      </code>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 mt-6">
                      <div className="flex-1 h-2 bg-zinc-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${returnProgressBarColor(
                            result.isCyberbullying,
                            result.confidence
                          )}
                          }`}
                          style={{ width: `${Math.round(result.confidence)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-medium text-red-400">
                      <code>Error</code>
                    </div>
                  </div>
                  <div className="text-sm text-red-300/80">
                    <code>{error}</code>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Project Overview */}
          <div className="space-y-6">
            <h2 className="text-base font-medium text-muted-foreground uppercase">
              Overview
            </h2>
            <div className="space-y-4">
              <code className="text-sm leading-relaxed block">
                The Better Threads Project is a custom GPT model designed to
                identify and classify cyberbullying in online conversations.
                Built from scratch, this project demonstrates expertise in
                machine learning, natural language processing, and model
                training.
              </code>
              <code className="text-sm leading-relaxed block">
                The model was trained on a curated dataset of online
                conversations and can distinguish between normal discourse and
                various forms of cyberbullying, making it valuable for content
                moderation and online safety applications.
              </code>
            </div>
          </div>

          {/* Technical Details */}
          <div className="space-y-6">
            <h2 className="text-base font-medium text-muted-foreground uppercase">
              Technical Implementation
            </h2>
            <div className="space-y-4">
              <code className="text-sm leading-relaxed block">
                <strong className="text-foreground">Architecture:</strong> The
                model is built using transformer architecture, specifically
                designed for text classification tasks. The implementation
                includes custom attention mechanisms optimized for detecting
                subtle patterns in cyberbullying language.
              </code>
              <code className="text-sm leading-relaxed block">
                <strong className="text-foreground">Training Process:</strong>{" "}
                The model was trained on a diverse dataset containing thousands
                of labeled examples. Training involved multiple epochs with
                careful hyperparameter tuning to achieve optimal performance
                while avoiding overfitting.
              </code>
              <code className="text-sm leading-relaxed block">
                <strong className="text-foreground">Fine-tuning:</strong> The
                base model underwent extensive fine-tuning on domain-specific
                data, including various forms of online harassment, hate speech,
                and toxic language patterns.
              </code>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-6">
            <h2 className="text-base font-medium text-muted-foreground uppercase">
              Key Features
            </h2>
            <div className="space-y-3">
              {[
                "Real-time text classification",
                "High accuracy in detecting subtle cyberbullying patterns",
                "Scalable architecture for production deployment",
                "Custom training pipeline and data preprocessing",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <code className="text-blue-400/80 mt-0.5">•</code>
                  <code className="text-sm leading-relaxed">{feature}</code>
                </div>
              ))}
            </div>
          </div>

          {/* Impact & Results */}
          <div className="space-y-6">
            <h2 className="text-base font-medium text-muted-foreground uppercase">
              Impact & Results
            </h2>
            <div className="space-y-4">
              <code className="text-sm leading-relaxed block">
                This project showcases advanced machine learning capabilities,
                including the ability to build and train custom models from the
                ground up. The model demonstrates practical application of NLP
                techniques to solve real-world problems in online safety.
              </code>
              <code className="text-sm leading-relaxed block">
                The implementation required deep understanding of transformer
                architectures, training methodologies, and optimization
                techniques, highlighting expertise in both theoretical ML
                concepts and practical implementation.
              </code>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
