import { atom } from "recoil";

export const blocksCount = atom<number>({
  key: "blocksCount",
  default: 6,
});

export const phase = atom<"ready" | "playing" | "ended">({
  key: "phase",
  default: "ready",
});

export const startTime = atom<number>({
  key: "startTime",
  default: 0,
});

export const endTime = atom<number>({
  key: "endTime",
  default: 0,
});
