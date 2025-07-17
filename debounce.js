const debounceTimers = new Map();

/**
 * Debounce a callback by key.
 *
 * @param {string|symbol} key - Unique identifier for the operation (e.g., a path).
 * @param {Function} callback - The function to execute after debounce delay.
 * @param {number} delay - Delay in milliseconds.
 */
function debounce(key, callback, delay = 1000) {
  if (debounceTimers.has(key)) {
    clearTimeout(debounceTimers.get(key));
  }

  debounceTimers.set(
    key,
    setTimeout(() => {
      debounceTimers.delete(key);
      callback();
    }, delay)
  );
}

function clearAll() {
  for (const timeout of debounceTimers.values()) {
    clearTimeout(timeout);
  }
  debounceTimers.clear();
}

module.exports = {
  debounce,
  clearAll,
};