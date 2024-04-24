export function formatWeight(weight: number) {
    if (weight < 1000) return weight + "g";
    return (weight / 1000) + "kg";
}