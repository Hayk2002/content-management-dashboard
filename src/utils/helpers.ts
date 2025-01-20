export const containsUrl = (str: string) => {
    const urlRegex = /https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}([/\w-]*)*/;
    return urlRegex.test(str);
};
