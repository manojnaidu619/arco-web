"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { howItWorksSteps } from "@/config/landing";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { cn } from "@/lib/utils";

const STEP_INTERVAL_MS = 5000;

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearStepInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  }, []);

  const startStepInterval = useCallback(() => {
    clearStepInterval();
    setProgress(0);
    
    // Update progress bar
    progressIntervalRef.current = setInterval(() => {
      setProgress((current) => {
        const newProgress = current + (100 / (STEP_INTERVAL_MS / 50));
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 50);
    
    // Move to next step
    intervalRef.current = setInterval(() => {
      setActiveStep((current) => (current + 1) % howItWorksSteps.length);
      setProgress(0);
    }, STEP_INTERVAL_MS);
  }, [clearStepInterval]);

  useEffect(() => {
    if (!isPaused) {
      startStepInterval();
    } else {
      clearStepInterval();
    }

    return clearStepInterval;
  }, [isPaused, startStepInterval, clearStepInterval]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgress(0);
    if (!isPaused) {
      startStepInterval();
    }
  };

  const activeStepData = howItWorksSteps[activeStep];

  return (
    <section id="how-it-works" className="py-20 md:py-24">
      <MaxWidthWrapper>
        <HeaderSection
          label="How it works"
          title="Up and running in minutes"
          subtitle="Three steps and you're seeing which model gives the best answer."
        />

        <div
          className="mt-12 grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Steps list */}
          <div className="relative">
            <div className="space-y-3">
              {howItWorksSteps.map((step, index) => {
                const isActive = index === activeStep;

                return (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => handleStepClick(index)}
                    className={cn(
                      "relative w-full overflow-hidden rounded-xl border text-left transition-all duration-300",
                      isActive
                        ? "border-primary/30 bg-primary/5 shadow-sm"
                        : "border-border/50 bg-transparent hover:bg-muted/40",
                    )}
                  >
                    <div className="flex items-start gap-3 px-4 py-4">
                      <span
                        className={cn(
                          "flex size-9 shrink-0 items-center justify-center rounded-lg border text-sm font-bold transition-colors",
                          isActive
                            ? "border-primary/30 bg-primary/10 text-primary"
                            : "border-border bg-muted/50 text-muted-foreground",
                        )}
                      >
                        {step.num}
                      </span>

                      <div className="flex-1 pt-0.5">
                        <h3
                          className={cn(
                            "text-base font-semibold transition-colors",
                            isActive ? "text-foreground" : "text-muted-foreground",
                          )}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={cn(
                            "mt-1.5 text-sm leading-relaxed transition-colors",
                            isActive
                              ? "text-muted-foreground"
                              : "text-muted-foreground/70",
                          )}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Progress bar at bottom - only visible on active card */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/30">
                        <div
                          className="h-full bg-primary transition-all duration-100 ease-linear"
                          style={{
                            width: `${progress}%`,
                          }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Progress dots (mobile) */}
            <div className="mt-6 flex justify-center gap-2 md:hidden">
              {howItWorksSteps.map((step, index) => (
                <button
                  key={step.num}
                  type="button"
                  aria-label={`Go to step ${step.num}: ${step.title}`}
                  onClick={() => handleStepClick(index)}
                  className={cn(
                    "size-2 rounded-full transition-all duration-300",
                    index === activeStep
                      ? "w-6 bg-primary"
                      : "bg-muted-foreground/30",
                  )}
                />
              ))}
            </div>
          </div>

          {/* Screenshot in macOS window frame */}
          <div className="relative overflow-hidden rounded-xl border bg-muted/30 pt-8 shadow-sm">
            {/* macOS traffic light buttons */}
            <div className="absolute left-3 top-3 z-10 flex gap-1.5">
              <span className="block size-2.5 rounded-full bg-[#FF5F57]" />
              <span className="block size-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="block size-2.5 rounded-full bg-[#28C840]" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border-t bg-background">
              {howItWorksSteps.map((step, index) => (
                <Image
                  key={step.num}
                  src={step.image}
                  alt={step.title}
                  fill
                  priority={index === 0}
                  className={cn(
                    "object-contain transition-opacity duration-300",
                    index === activeStep ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
            </div>

            <p className="sr-only" aria-live="polite">
              Showing step {activeStepData.num}: {activeStepData.title}
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
