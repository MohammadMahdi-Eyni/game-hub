import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data: platforms, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} size={"md"}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            onClick={() => {
              onSelectPlatform(platform);
            }}
            key={platform.id}
            value={platform.name}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
