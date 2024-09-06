// Geo utility functions

export const getCurrentPosition = (
  onSuccess: PositionCallback,
  onError?: PositionErrorCallback
) => {
  // avoid server-side and old browsers
  if (typeof window === "undefined") {
    return;
  }
  if (typeof navigator === undefined || !("geolocation" in navigator)) {
    console.warn(
      "Unsupported environment. Cannot fetch the user's geo coordinates"
    );
    return;
  }
  navigator.geolocation.getCurrentPosition(onSuccess, onError, {
    timeout: 10000,
    enableHighAccuracy: true,
    maximumAge: 1000 * 60
  });
};
