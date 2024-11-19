function showDetails(serviceId) {
    const details = {
        animation1: "Service 1 offers tailored animation solutions to enhance your business marketing.",
        animation2: "Service 2 provides in-depth consultation for your brand's growth.",
        animation3: "Service 3 specializes in creating innovative tech solutions for businesses.",
    };

    const detailsText = document.getElementById('details-text');
    detailsText.textContent = details[serviceId] || "Click on a service to see more details.";
}
