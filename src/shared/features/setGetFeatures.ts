import { FeatureFlags } from '../types/featureFlags'

let featureFlags: FeatureFlags

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags
  }
}

export function getFeaturesFlags(flag: keyof FeatureFlags) {
  return featureFlags[flag]
}
