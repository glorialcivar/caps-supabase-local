// Geo utility functions

export const getCurrentPosition = (options: PositionOptions = {}) => {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    if (typeof window === "undefined")
      throw new Error("Unsupported environment");

    if (typeof navigator === undefined || !("geolocation" in navigator)) {
      return reject(
        "Unsupported environment. Cannot fetch the user's geo coordinates"
      );
    }

    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error),
      {
        timeout: 15000,
        enableHighAccuracy: true,
        maximumAge: 1000 * 60 * 10,
        ...options
      }
    );
  });
};
