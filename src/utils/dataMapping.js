export function mapAuthorData(courses, authors) {

  const mappedAuthors = authors.map(author => {
    let newAuthor = Object.assign({}, author); 
    // MUST BE IMMUTABLE! changing author inside authors map will mutate original value!

    newAuthor.numberOfVideos = courses.filter(
      course => course.authorId === author.id).length;

     return newAuthor;
  });

  return mappedAuthors;
}