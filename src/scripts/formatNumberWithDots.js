export function formatNumberWithDots(number) {
    // Convert the number to a string:
    const numStr = number.toString();

    // Use regex to add a dot every 3 digits from the right
    const formattedNumber = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return formattedNumber;
}