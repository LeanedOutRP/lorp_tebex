import {Container, Title, Text, Accordion, Box, Stack, Paper, Group} from "@mantine/core"
import {IconHelp, IconShoppingCart, IconKey, IconMailFast, IconFileDescription} from "@tabler/icons-react"
import faqData from "@/data/faq.json"

const iconMap: Record<string, any> = {
    IconHelp,
    IconShoppingCart,
    IconKey,
    IconMailFast,
}

export default function FAQPage() {
    const {title, description, categories, contact} = faqData

    return (
        <Box style={{minHeight: "100vh"}}>
            <Container size="lg" py={60}>
                <Stack gap="xl">
                    <Stack gap="md" align="center">
                        <Title order={1} style={{color: "#FFFFFF", fontSize: "3rem", fontWeight: 900, textAlign: "center", background: "linear-gradient(135deg, #9b3dff 0%, #601fc9ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-1px"}}>
                            {title}
                        </Title>
                        <Text size="lg" c="#999999" ta="center" maw={600}>
                            {description}
                        </Text>
                    </Stack>
                    <Stack gap="xl" mt="xl">
                        {categories.map((category, categoryIndex) => {
                            const Icon = iconMap[category.icon] || IconHelp
                            return (
                                <Paper key={categoryIndex} p="xl" radius="md" style={{background: "#1a1a1a", border: "1px solid #2a2a2a"}}>
                                    <Group gap="md" mb="xl">
                                        <Box style={{width: 48, height: 48, borderRadius: "12px", background: "rgba(135, 41, 243, 0.1)", border: "1px solid rgba(135, 41, 243, 0.2)", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                            <Icon size={24} color="#9b3dff"/>
                                        </Box>
                                        <Title order={2} style={{color: "#FFFFFF", fontSize: "1.5rem", fontWeight: 700}}>
                                            {category.name}
                                        </Title>
                                    </Group>
                                    <Accordion variant="separated" radius="sm" styles={{item: {background: "#111111", border: "1px solid #2a2a2a", "&[data-active]": {background: "#111111", borderColor: "#9b3dff"}}, control: {padding: "16px 20px", "&:hover": {background: "rgba(135, 41, 243, 0.05)"}}, label: {color: "#FFFFFF", fontSize: "1rem", fontWeight: 600}, chevron: {color: "#9b3dff"}, content: {padding: "20px", color: "#999999", fontSize: "0.95rem", lineHeight: 1.6}}}>
                                        {category.questions.map((faq, faqIndex) => (
                                            <Accordion.Item key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                                                <Accordion.Control>{faq.question}</Accordion.Control>
                                                <Accordion.Panel>{faq.answer}</Accordion.Panel>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </Paper>
                            )
                        })}
                    </Stack>
                    <Paper p="xl" radius="md" mt="xl" style={{background: "linear-gradient(135deg, rgba(135, 41, 243, 0.1) 0%, rgba(135, 41, 243, 0.05) 100%)", border: "1px solid rgba(135, 41, 243, 0.2)"}}>
                        <Stack align="center" gap="md">
                            <IconFileDescription size={48} color="#9b3dff"/>
                            <Title order={3} c="#FFFFFF" ta="center">
                                {contact.title}
                            </Title>
                            <Text size="md" c="#999999" ta="center" maw={500}>
                                {contact.description}
                            </Text>
                            <Group gap="md" mt="md">
                                <a href={contact.discordUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                                    <Paper p="md" radius="sm" style={{background: "#9b3dff", color: "#111111", cursor: "pointer", transition: "all 0.2s", border: "none"}} onMouseEnter={(e) => {e.currentTarget.style.background = "#6b25dbff", e.currentTarget.style.transform = "translateY(-2px)"}} onMouseLeave={(e) => {e.currentTarget.style.background = "#9b3dff", e.currentTarget.style.transform = "translateY(0)"}}>
                                        <Text fw={700} size="sm">
                                            {contact.discordButtonText}
                                        </Text>
                                    </Paper>
                                </a>
                            </Group>
                        </Stack>
                    </Paper>
                </Stack>
            </Container>
        </Box>
    )
}