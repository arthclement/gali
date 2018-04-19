<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;

/**
 * User
 *
 * @ORM\Table(name="user", uniqueConstraints={@ORM\UniqueConstraint(name="iduser_UNIQUE", columns={"iduser"})})
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity(
 *     fields={"username"},
 *     errorPath="username",
 *     message="This entered username is already in use."
 * )
 * @UniqueEntity(
 *     fields={"email"},
 *     errorPath="email",
 *     message="The entered email is already in use."
 * )
 */
class User
{
    /**
     * @var int
     *
     * @ORM\Column(name="iduser", type="integer", nullable=false, options={"unsigned"=true})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $iduser;

    /**
     * @var string
     *
     * @ORM\Column(name="username", type="string", length=255, nullable=false)
     */
    private $username;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255, nullable=false)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="string", length=255, nullable=false)
     */
    private $password;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="create_time", type="datetime", nullable=true, options={"default"="CURRENT_TIMESTAMP"})
     */
    private $createTime = 'CURRENT_TIMESTAMP';

    /**
     * @var bool|null
     *
     * @ORM\Column(name="active", type="boolean", nullable=true)
     */
    private $active;

    /**
     * @var string|null
     *
     * @ORM\Column(name="email_token", type="string", length=255, nullable=true)
     */
    private $emailToken;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Role")
     */
    private $roles = [];

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $salt;

    public function __construct() {
        $this->setEmailToken(Uuid::uuid1());
        $this->roles = new ArrayCollection();
    }

    /**
     * @return int
     */
    public function getIduser(): int
    {
        return $this->iduser;
    }

    /**
     * @return string
     */
    public function getUsername(): string
    {
        return $this->username;
    }

    /**
     * @param string $username
     * @return User
     */
    public function setUsername(string $username): self
    {
        $this->username = $username;
        return $this;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param string $email
     * @return User
     */
    public function setEmail(string $email): self
    {
        $this->email = $email;
        return $this;
    }

    /**
     * @return string
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * @param string $password
     * @return User
     */
    public function setPassword(string $password): self
    {
        $this->password = $password;
        return $this;
    }

    /**
     * @return \DateTime|null
     */
    public function getCreateTime(): ?\DateTime
    {
        return $this->createTime;
    }

    /**
     * @param \DateTime|null $createTime
     * @return User
     */
    public function setCreateTime(?\DateTime $createTime): self
    {
        $this->createTime = $createTime;
        return $this;
    }

    /**
     * @return bool|null
     */
    public function getActive(): ?bool
    {
        return $this->active;
    }

    /**
     * @param bool|null $active
     * @return User
     */
    public function setActive(?bool $active): self
    {
        $this->active = $active;
        return $this;
    }

    /**
     * @return null|string
     */
    public function getEmailToken(): ?string
    {
        return $this->emailToken;
    }

    /**
     * @param null|string $emailToken
     * @return User
     */
    public function setEmailToken(?string $emailToken): self
    {
        $this->emailToken = $emailToken;
        return $this;
    }

    /**
     * @return null|string
     */
    public function getSalt(): ?string
    {
        return $this->salt;
    }

    /**
     * @param string $salt
     * @return User
     */
    public function setSalt(string $salt): self
    {
        $this->salt = $salt;
        return $this;
    }
}
