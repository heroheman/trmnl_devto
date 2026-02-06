/**
 * TRMNL Dev.to Plugin - Transform Function
 * 
 * Reduces Dev.to API response payload to under 100KB by:
 * - Removing unused article fields
 * - Simplifying user object to only include name
 * - Truncating description
 * - Keeping only essential metadata
 * 
 * Required fields per article:
 * - title: Article title
 * - description: Short description (max 300 chars)
 * - cover_image: Cover image URL
 * - user.name: Author name
 * - readable_publish_date: Human-readable publish date
 * - tags: Comma-separated tags
 * - reading_time_minutes: Estimated reading time
 */

function transform(input) {
  /**
   * Bereinigt und kürzt Text-Content
   * @param {string} content - Der zu bereinigende Content
   * @param {number} maxChars - Maximale Zeichenlänge
   * @returns {string} Bereinigter und gekürzter Text
   */
  function cleanAndTruncate(content, maxChars) {
    if (!content) return "";
    
    let cleaned = String(content).trim();
    
    // Auf maxChars begrenzen
    if (cleaned.length > maxChars) {
      cleaned = cleaned.substring(0, maxChars).trim() + '...';
    }
    
    return cleaned;
  }

  /**
   * Reduziert einen einzelnen Artikel auf die benötigten Felder
   * @param {Object} article - Der Artikel
   * @returns {Object} Reduzierter Artikel mit nur benötigten Feldern
   */
  function reduceArticle(article) {
    return {
      title: article.title || "",
      description: cleanAndTruncate(article.description, 300),
      cover_image: article.cover_image || null,
      user: {
        name: article.user ? article.user.name : ""
      },
      readable_publish_date: article.readable_publish_date || "",
      tags: article.tags || "",
      reading_time_minutes: article.reading_time_minutes || 0
    };
  }

  // Wenn input ein Array ist (normale Dev.to API Response)
  if (Array.isArray(input)) {
    return input.map(reduceArticle);
  }
  
  // Wenn input ein Objekt mit einem data/articles Array ist
  if (input.data && Array.isArray(input.data)) {
    return input.data.map(reduceArticle);
  }
  
  if (input.articles && Array.isArray(input.articles)) {
    return input.articles.map(reduceArticle);
  }
  
  // Fallback: Gebe input unverändert zurück
  return input;
}
